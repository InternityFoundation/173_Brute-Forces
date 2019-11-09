#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np


# In[2]:


html = requests.get("https://www.1mg.com/drugs/pan-d-capsule-343042")


# In[3]:


salt_class = "saltInfo DrugHeader__meta-value___vqYM0"
drug_name_class = "DrugHeader__title___1NKLq"
best_price_class = "DrugPriceBox__best-price___32JXw"
prod_class = "style__horizontal-card___1Zwmt"
search = "https://www.1mg.com/search/all?name="
base = "https://www.1mg.com"
salt_class_new = "FactBox__rowContent__JHFU7 FactBox__flexCenter__zYkHn col-3"


# In[4]:


def getMedicineInfo(med_name):
    med_name = med_name.strip().split(" ")
    medname =""
    for j in med_name:
        medname = medname+j+"+"
    medname = medname[:-1]
    #print(medname)
    html = requests.get(search+medname)
    data = BeautifulSoup(html.text)
    a = data.find(class_=prod_class)
    if a == None:
        return ["NOT FOUND"]
    add = a.a['href']
    html1 = requests.get(base+add)
#     print(html1)
    data1 = BeautifulSoup(html1.text)
    #         drug = data1.find(class_ =drug_name_class)
    #         price = data1.find(class_ =best_price_class)
    salt = data1.find(class_ = salt_class_new)
    if salt == None:
        return ["NOT FOUND"]
    salt = salt.text
    salts = salt.split("+")
    ans = []
    for component in salts:
        index = component.find("(")
        if index == -1:
            ans.append(component)
        else:
            ans.append(component[:index].strip())
    return ans


# In[5]:


saltName = input()
print(getMedicineInfo(saltName))

