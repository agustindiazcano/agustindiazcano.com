$ErrorActionPreference = 'Stop'
$taskName = 'AgustinWeb Daily Usage'
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    throw "Task '$taskName' already exists; inspect it before replacing it."
}
$nodePath = (Get-Command node.exe -ErrorAction Stop).Source
$launcher = Join-Path $PSScriptRoot 'run-usage-hidden.vbs'
$job = Join-Path $PSScriptRoot 'daily-usage-job.mjs'
$wscript = Join-Path $env:SystemRoot 'System32\wscript.exe'
$arguments = '//B "{0}" "{1}" "{2}"' -f $launcher, $nodePath, $job
$action = New-ScheduledTaskAction -Execute $wscript -Argument $arguments -WorkingDirectory (Split-Path $PSScriptRoot)
$trigger = New-ScheduledTaskTrigger -Daily -At '12:00'
$settings = New-ScheduledTaskSettingsSet -Hidden -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Minutes 30)
$user = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$principal = New-ScheduledTaskPrincipal -UserId $user -LogonType Interactive -RunLevel Limited
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal | Out-Null
Get-ScheduledTask -TaskName $taskName | Select-Object TaskName, State, @{Name='User';Expression={$_.Principal.UserId}}
