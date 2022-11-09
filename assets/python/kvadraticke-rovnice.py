import math
import json
import random

r = 100 + 1 # range; needs +1 for for loop
n = 0
mydict = {}

for a in range(1, r):
    for b in range(r):
        for c in range(r):
            d = b ** 2 - 4 * a * c
            '''if d >= 0 and math.sqrt(d) == round(math.sqrt(d)):
                mydict[n] = [a, b, c]
                n += 1'''
            if d > 0:
                x1 = (-(b) + math.sqrt(d))/(2*a) 
                x2 = (-(b) - math.sqrt(d))/(2*a) 
                if x1 == round(x1) and x2 == round(x2):
                    mydict[n] = [a, b, c]
                    n += 1
            elif d == 0:
                x1 = (-(b) + math.sqrt(d))/(2*a) 
                if x1 == round(x1):
                    mydict[n] = [a, b, c]
                    n += 1


                
with open("pekne-kvadraticke-rovnice.json", "w") as file:
    file.write(json.dumps(mydict, indent=4))
