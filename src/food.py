from efficient_apriori import apriori
import matplotlib.pyplot as plt
import numpy as np
import firebaseConfig
from matplotlib import rcParams
rcParams.update({'figure.autolayout': True})
def getItemsets(ListOfIngredients):
    itemsets, _ = apriori(transactions, min_support=0.5,  min_confidence=1)
    return itemsets
def plotGraph(label,freq):
    # this is for plotting purpose
    index = np.arange(len(label))
    plt.bar(index, freq)
    plt.ylabel("Support Count", fontsize = 15,labelpad=10)
    plt.xlabel("Ingredients", fontsize=15,labelpad=5)
    plt.xticks(index, label, fontsize=15, rotation=270)
    plt.title('Most probable causes of your allergy',fontsize=15,pad=10)
    plt.savefig("graph.png")
# transactions = [('eggs', 'bacon', 'soup'),
#                 ('eggs', 'bacon', 'apple'),
#                 ('soup', 'bacon', 'banana')]
if __name__ == "__main__":
    transactions = []
    data,_ = firebaseConfig.getDataFromFirebase(user="dummy/food")
    for i in data:
        transactions.append(tuple(data[i]))
    itemsets = getItemsets(transactions)
    items = []
    freq = []
    for i in itemsets:
        # print("itemsets[i]",itemsets[i])
        for j in itemsets[i]:
                freq.append(itemsets[i][j])
                name  = ""
                for k in j:
                    name = name + k + " , "
                items.append(name[:-3])
    plotGraph(items,freq)