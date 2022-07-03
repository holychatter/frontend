leftBannerwidth=60
paddingVal=15
min_width=63
max_width=63


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
  return width



f= open("chapters.css","w")

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
  f.write(".hc-chapters-left-margin { margin-left: " + str(margin) + "px; }\n")
  f.write("}\n\n")
  if winowSize == 301:
    break
  winowSize-=step

f.write(".hc-big-button-chapter-height { height:75px; }\n")
f.write(".hc-big-button-chapter-width { width:63px; }\n")
f.close()
