
leftBannerwidth=60
paddingVal=15
min_width=270
max_width=320


def widthOfPage(windowSize):
  if windowSize <= 850:
    return windowSize
  return windowSize - leftBannerwidth


def widthOfFolders(nbOfFolders, withOfAFolder):
  return withOfAFolder*nbOfFolders + paddingVal*nbOfFolders*2 + paddingVal*2



def maxNbOfFolders(windowSize):
  res=2
  while widthOfFolders(res, min_width) <= widthOfPage(windowSize):
    res+=1
  return res-1


def maxFolderWidth(windowSize, nbOfFolders):
  res=min_width+1
  while widthOfFolders(nbOfFolders, res) <= widthOfPage(windowSize) and res <= max_width:
    res+=1
  return res-1

def getHeight(width):
  return int(round((width*150.)/min_width))



f= open("categories-1.css","w")

winowSize=1951
step=25

while True:
  nbOfFolders = maxNbOfFolders(winowSize)
  width = maxFolderWidth(winowSize, nbOfFolders)
  height = getHeight(width)
  margin = int(round((widthOfPage(winowSize) - widthOfFolders(nbOfFolders, width) + (paddingVal*2)) / 2.))
  if margin<0:
    margin = 0
  if winowSize == 1951:
    f.write("@media screen and (min-width: " + str(winowSize) + "px) {\n")
  elif winowSize == 301:
    f.write("@media only screen and (max-width: " + str(winowSize+step-1) + "px) {\n")
  else:
    f.write("@media screen and (min-width: " + str(winowSize) + "px)  and (max-width: " + str(winowSize+step-1) + "px) {\n")
  f.write(":root {\n")
  f.write("  --hc-val-big-button-normal-width: " + str(width) + "px;\n")
  f.write("  --hc-val-big-button-normal-height: " + str(height) + "px;\n")
  f.write("  --hc-val-big-button-normal-durationtop: " + str(height - 32) + "px;\n")
  f.write("}\n")
  f.write(".hc-categories-left-margin { margin-left: " + str(margin) + "px; }\n")
  f.write("}\n\n")
  if winowSize == 301:
    break
  winowSize-=step

f.write(".hc-big-button-normal-width { width:var(--hc-val-big-button-normal-width); }\n")
f.write(".hc-big-button-normal-height { height:var(--hc-val-big-button-normal-height); }\n")
f.write(".hc-big-button-normal-durationtop { top:var(--hc-val-big-button-normal-durationtop); }\n")
f.close()
