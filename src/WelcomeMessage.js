import React from 'react';
import PlusIcon from 'material-ui/svg-icons/content/add';

export default (props) => {
  return (
    <div className="horizontal-pad">
      <p>Welcome to <strong>pgrobban's GlosTrainer</strong>!</p>
      <p>I know that learning Swedish vocabulary can be difficult,
        so the purpose of this app is to help you write down lists of words and their conjugations to help you
        remember them better.</p>
      <p>There are no word lists currently saved on your device. See that <PlusIcon /> icon on the top right corner?
        Let's tap that to create a new word list.</p>
      <p>Lycka till/Good luck 😀</p>
    </div>
  )
}