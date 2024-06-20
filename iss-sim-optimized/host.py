import os
port = "0"
while int(float(port)) < 1 or int(float(port)) > 65536 or int(float(port)) != float(port):
	port = input("Host on port number (1-65536) > ")
	if port == "":
		port = "5555"
	if int(float(port)) in [1,7,9,11,13,15,17,19,20,21,22,23,25,37,42,43,53,69,77,79,87,95, 101,102,103,104,109,110,111,113,115,117,119,123,135,137,139,143,161,179,389,427,465,512,513,514,515,526,530,531,532,540,548,554,556,563,587, 601,636,993,995,1719,1720,1723,2049,3659,4045,5060,5061,6000,6566,6665,6666,6667,6668,6669,6697,10080]:
		print("Port " + port + " is a restricted port.")
		port = "0"
port = str(int(float(port)))
print("Hosting on port number " + port +". You may now go to localhost:" + port + "/iss-sim.spacex.com/ to run the game.")
print("Stop the server by pressing [Ctrl] + [C]")
os.system("python3 -m http.server " + port)