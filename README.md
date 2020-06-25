# Kana Board
Kana board is a simple app that I made using React + Redux. The reason why I made this is to help me memorize Japanese vocabulary. Another reason is that I am learning Redux and todolist app is hella boring to make. I won't use it either since I never arrange my activities lol. I just do something whenever I feel like it.

I got this idea from a [Youtube video](https://www.youtube.com/watch?v=bX8zfeI7Vg4&t=192s) from a channel called [Japanese Ammo With Misa](https://www.youtube.com/channel/UCBSyd8tXJoEJKIXfrwkPdbA). She did this by using a book, but I can't be bothered to grab a pen and write it using my hand because my handwriting is ugly as heck. Most likely I ended up not reading it because I can't read it. So I made this app instead. You can try this app [right here](TODO).

## Brief explanation of how it works
Basically, you have some sort of table with 5 columns in it. The first column is used to write the kana of that Japanese word. The second column is used to write the meaning of that word in English. Then the third column is to write an example of that word in a sentence, it will highlight the word that is written in the first column to make it more clear on which part of a sentence that word is used. The fourth column is used to write the context, it explains briefly when to use that word. Finally, the last column is used to write my own example.

I made the table so that it can only be edited when the date of the table creation is the same as your current date. Basically, it's only editable for a day (it's not always 24 hours, it depends on when you create it). I did this because I want to see how many words I learned in a day and I don't want to cheat by adding a new word in a table that is created a week ago.

## How to
Even though it's pretty straight forward, I add this just because I want to fill this readme :b

### Adding a new table
It's pretty straight forward. There's a huge thin text there that says "Add New Table".

### Adding a new item
The last row of the table is a button that you can press to add a new item. A pop up will appear, you fill in the form, then you click "Add".

### Editing and deleting an item
There's an edit button on the last row. It will disappear when that table expires.

### Deleting a table
There's a smol trash icon on the right-hand side of the table date bar.

## Running on your local machine
Clone this repo
``` sh
git clone https://github.com/elianiva/kana-board
```

Install all of its dependencies
``` sh
# npm
npm install
# pnpm
pnpm install
```

There are 4 commands
- `start` will start the development server
- `build:full` will build the whole app
- `build:css-prod` will build the production css
- `build:css-devel` will build the development css

### Technology / Packages used in this app
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)
- [uuid](https://www.npmjs.com/package/uuid)
- [react-string-replace](https://www.npmjs.com/package/react-string-replace)
