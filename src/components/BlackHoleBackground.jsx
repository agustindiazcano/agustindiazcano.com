import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const BlackHoleBackground = () => {
    const canvasRef = useRef(null);
    const { scrollYProgress } = useScroll();
    
    // Opacity goes from 0 to 1 between 10% and 40% scroll depth.
    const rawOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    // Apply a smooth transition spring so the fade feels fluid even if scrolling fast
    const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', { antialias: false, powerPreference: 'default' });
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const resize = () => {
            // Using slightly lower resolution for better performance while keeping it sharp enough
            canvas.width = Math.floor(window.innerWidth * 0.6);
            canvas.height = Math.floor(window.innerHeight * 0.6);
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        window.addEventListener('resize', resize);

        const VS = `attribute vec2 p; void main(){ gl_Position=vec4(p,0,1); }`;

        const FS = `precision highp float;
uniform vec2  R;
uniform float T;

float hash21(vec2 p){
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p+34.23);
  return fract(p.x * p.y);
}
float hash11(float p){ return fract(sin(p*127.1)*43758.5453); }

float vnoise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f*f*(3.0-2.0*f);
  float a=hash21(i), b=hash21(i+vec2(1,0));
  float c=hash21(i+vec2(0,1)), d=hash21(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}

float fbm(vec2 p){
  float v=0.0, a=0.5;
  mat2 m = mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<6;i++){
    v += a*vnoise(p);
    p  = m*p;
    a *= 0.5;
  }
  return v;
}

vec3 diskPalette(float temp, float doppler){
  vec3 c;
  vec3 col0 = vec3(0.18, 0.04, 0.01);
  vec3 col1 = vec3(0.75, 0.18, 0.02);
  vec3 col2 = vec3(1.00, 0.55, 0.08);
  vec3 col3 = vec3(1.00, 0.92, 0.70);
  c = mix(col0, col1, smoothstep(0.0, 0.3, temp));
  c = mix(c,    col2, smoothstep(0.3, 0.65, temp));
  c = mix(c,    col3, smoothstep(0.65,1.0,  temp));
  c = mix(c, c * vec3(0.7, 0.85, 1.4), doppler * 0.35);
  return c;
}

float hitDisk(vec3 ro, vec3 rd, float rMin, float rMax){
  if(abs(rd.y) < 0.0001) return -1.0;
  float t = -ro.y / rd.y;
  if(t < 0.001) return -1.0;
  float r = length((ro + rd*t).xz);
  return (r >= rMin && r <= rMax) ? t : -1.0;
}

vec3 stars(vec3 dir){
  vec3 col = vec3(0.0);
  for(int i=0;i<3;i++){
    float sc = 1.0 + float(i)*2.3;
    vec2 sp = dir.xz / (abs(dir.y) + 0.15) * sc;
    vec2 gi = floor(sp * 8.0);
    vec2 gf = fract(sp * 8.0) - 0.5;
    float sv = hash21(gi + float(i)*7.3);
    float br = hash21(gi + float(i)*3.1 + 1.7);
    if(sv > 0.91){
      float d = length(gf);
      vec3 sc2 = mix(vec3(0.7,0.8,1.0), vec3(1.0,0.9,0.7), br);
      col += sc2 * max(0.0, 0.04 - d) / 0.04 * (0.3 + br*0.7);
    }
  }
  float mw = fbm(dir.xz * 1.5 + 0.3) * smoothstep(0.4,0.0,abs(dir.y));
  col += vec3(0.05, 0.06, 0.12) * mw;
  return col;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*R) / R.y;
  vec3 ro = vec3(0.0, 2.2, -10.0);
  vec3 ta = vec3(0.0,  0.0,   0.0);
  vec3 fwd   = normalize(ta - ro);
  vec3 right = normalize(cross(fwd, vec3(0,1,0)));
  vec3 upV   = cross(right, fwd);
  vec3 rd    = normalize(fwd + uv.x*right*1.2 + uv.y*upV*1.2);

  float rs   = 1.0;
  float rISCO = 3.0 * rs;
  float rDiskIn  = 1.8 * rs;
  float rDiskOut = 6.5 * rs;

  vec3 pos = ro;
  vec3 dir = rd;
  float dt = 0.25;

  float accumGlow  = 0.0;
  float diskHit    = 0.0;
  vec3  diskColor  = vec3(0.0);
  bool  swallowed  = false;
  float minR       = 999.0;

  for(int i=0; i<120; i++){
    float r = length(pos);
    minR = min(minR, r);

    if(r < rs * 0.92){ swallowed = true; break; }
    if(r > 30.0) break;

    float rSq = r*r;
    float strength = 1.5 * rs / (rSq + 0.001);
    vec3  toC = -normalize(pos);
    vec3  perp = toC - dir * dot(toC, dir);
    dir = normalize(dir + perp * strength * dt);

    float photonR = abs(r - 1.5*rs);
    accumGlow += 0.004 / (photonR*photonR + 0.012);

    float tDisk = hitDisk(pos, dir, rDiskIn, rDiskOut);
    if(tDisk > 0.0 && tDisk < dt * 2.5){
      vec3 hp  = pos + dir * tDisk;
      float dr = length(hp.xz);

      float temp = 1.0 - smoothstep(rDiskIn, rDiskOut, dr);
      temp += 0.4 * exp(-(dr - rDiskIn) * 2.2);
      temp  = clamp(temp, 0.0, 1.0);

      float logDr  = log(dr / rDiskIn + 1.0);
      float phi    = atan(hp.z, hp.x);
      float turb   = fbm(vec2(logDr * 4.0 - T * 1.4, phi * 1.2)) * 0.7
                   + fbm(vec2(logDr * 9.0 - T * 2.8, phi * 2.5)) * 0.3;
      temp *= turb * 1.5;
      temp  = clamp(temp, 0.0, 1.0);

      float doppler = 0.5 + 0.5 * sin(phi - T * 0.5);
      float beam = pow(0.7 + 0.6 * doppler, 3.0);
      vec3  dc  = diskPalette(temp, doppler) * beam;
      float opa = temp * 2.5;
      diskColor  += dc * opa;
      diskHit    += opa;
    }
    pos += dir * dt;
    dt = max(0.08, (r - rs) * 0.15);
  }

  vec3 col = stars(rd) * 0.9;
  float nebR = length(uv);
  col += vec3(0.005, 0.008, 0.025) * (1.0 - smoothstep(0.2, 1.8, nebR));

  float pgClamped = clamp(accumGlow, 0.0, 8.0);
  col += vec3(0.45, 0.60, 1.00) * pgClamped * 0.35;
  col += vec3(0.80, 0.90, 1.00) * pgClamped * pgClamped * 0.06;

  if(diskHit > 0.001){
    vec3 avgDisk = diskColor / diskHit;
    col += avgDisk * min(diskHit, 3.5);
  }

  float innerGlow = exp(-max(minR - rs*1.2, 0.0) * 0.9);
  col += vec3(0.6, 0.28, 0.04) * innerGlow * 0.25;
  if(swallowed) col = vec3(0.0);

  col = (col * (2.51*col + 0.03)) / (col * (2.43*col + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(1.0/2.2));
  gl_FragColor = vec4(col, 1.0);
}`;

        function compileShader(src, type) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(s));
                return null;
            }
            return s;
        }

        const prog = gl.createProgram();
        gl.attachShader(prog, compileShader(VS, gl.VERTEX_SHADER));
        gl.attachShader(prog, compileShader(FS, gl.FRAGMENT_SHADER));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const pLoc = gl.getAttribLocation(prog, "p");
        gl.enableVertexAttribArray(pLoc);
        gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

        const rLoc = gl.getUniformLocation(prog, "R");
        const tLoc = gl.getUniformLocation(prog, "T");

        let t0 = performance.now();
        let animationFrameId;

        function draw(t) {
            gl.uniform2f(rLoc, canvas.width, canvas.height);
            gl.uniform1f(tLoc, (t - t0) * 0.001);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            animationFrameId = requestAnimationFrame(draw);
        }
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
            
            // Clean up WebGL resources
            gl.deleteProgram(prog);
            gl.deleteBuffer(buf);
            const ext = gl.getExtension('WEBGL_lose_context');
            if (ext) ext.loseContext();
        };
    }, []);

    return (
        <motion.div 
            style={{ opacity }} 
            className="fixed inset-0 z-[-1] pointer-events-none"
        >
            <canvas 
                ref={canvasRef} 
                className="block w-full h-full object-cover bg-black blur-[10px]"
            />
        </motion.div>
    );
};

export default BlackHoleBackground;
