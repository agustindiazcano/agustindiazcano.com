Option Explicit
Dim shell, command, result
Set shell = CreateObject("WScript.Shell")
command = """" & WScript.Arguments(0) & """ """ & WScript.Arguments(1) & """"
result = shell.Run(command, 0, True)
WScript.Quit result
