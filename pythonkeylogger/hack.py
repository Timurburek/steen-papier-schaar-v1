import os
import subprocess
import tempfile
 
# the gandalf-inspired message
message = "You shall not pass!"
 
# create a temporary text file path
temp_dir = tempfile.gettempdir()
gandalf_message_file = os.path.join(temp_dir, "gandalf_message.txt")
 
# write the message to the file
with open(gandalf_message_file, "w") as f:
    f.write(message)
 
# open the file in notepad
subprocess.Popen(["notepad.exe", gandalf_message_file])