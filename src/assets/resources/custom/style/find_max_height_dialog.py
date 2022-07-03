
f= open("dialog_max_height.css","w")

windowHeight=1551
step=25

while True:
  height = windowHeight - 220
  if windowHeight == 1551:
    f.write("@media screen and (min-height: " + str(windowHeight) + "px) {\n")
  elif windowHeight == 301:
    f.write("@media only screen and (max-height: " + str(windowHeight+step-1) + "px) {\n")
  else:
    f.write("@media screen and (min-height: " + str(windowHeight) + "px)  and (max-height: " + str(windowHeight+step-1) + "px) {\n")
  f.write(".hc-dialog-height-match-screen { height: " + str(height) + "px; }\n")
  f.write("}\n\n")
  if windowHeight == 301:
    break
  windowHeight-=step

f.close()
