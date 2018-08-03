# FIFA18UT-AttributesSeller
Chrome extension in javascript / jQuery that sells attributes cards. More documentation will follow.

How to install:

1. Download this package, either clone the repository (if you know how to do this) or just click the download button and download as a zip then unzip it.
2. In chrome browser: navigate to 'chrome://extensions' and load the unpacked extension
3. Refresh browser, you should now see the extension icon to the top right.
Everything should be ready now

How to use:
1. Navigate to the ea sports fifa web application
2. Navigate to the page of the item you want to sell (I.E. Contracts page, staff page, player page)
3. Make sure that an item is selected.
4. Hit the '/' key on your keyboard. Hitting this key brings up a popup prompt that asks you to enter the amount of items you want to sell. (This key is set on line 11 of the script. You can change this to your own likings. In UT I never use the forward slash key ('/') so I just set it like that.)
5. Enter the amount of items you want to sell. (say you want to sell 30 gold contracts, simply enter 30)
  - In case of stacked items, that item will be sold untill it runs out, then it proceeds to the next item. (I.E. after 10 gold contract, it will move on to your next 2000 rare gold contracts)
  - In case of non-stacked items (players, staff etc), the algorithm will sell the selected item, then move on to the next (so to the bottom side) untill it runs out of items. If it does run out of items on the bottom, the algorithm will move onto the top.
  NOTE: In both cases, the algorithm will stop untill it reaches the amount that's provided by the user.
6. ???
7. PROFIT

To add:
- The algorithm can be ran on the background, even in another tab :)
- The algortihm will refresh the page once an error occurs to prevent bot detection.
