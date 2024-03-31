import React, {useState} from 'react'

export default function TextForm(props) {
    // TO Handel Up CASE
    const handelUpCase =  () =>{
       let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in Uppercase!","success");
    }

        // TO Handel Lower CASE

    const handeldownCase =  () =>{
        let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted in Lowercase!","success");
     }

    // TO Handel Clear Case

     const handelClear =  () =>{
        let newText ="";
         setText(newText);
         props.showAlert("Text has Cleared!","success");
     }

    // TO Handel Reversed

     const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
        props.showAlert("Text has Reversed!","success");
      };

    // TO Handel Speak CASE5
     const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    // TO Handel Capitalize First Word
      const capitalizeFirstWord = () => {
        let words = text.split(' ');
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let newText = capitalizedWords.join(' ');
        setText(newText);
        props.showAlert("Text  First Word Capitalize!","success");
    }
    
    const handelOnChange =  (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
  
    return (
    <>
 <div className="mb-3 container "style={ {color: props.mode === 'dark' ? 'white' : '#212529'} }>
    <h1>{props.heading}</h1>
  <textarea value={text} className="my-2 form-control" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : '#212529'}} onChange={handelOnChange} id="myBox" rows="5"></textarea>
  <button type="button" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : '#212529'}}  className="btn btn-primary my-2 " onClick={handelUpCase}>Upper-Case</button>
  <button type="button" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : 'red'}} className="btn btn-primary my-2 mx-2" onClick={handeldownCase}>Lower-Case</button>
  <button type="button" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : '#212529'}} className="btn btn-primary my-2 mx-2" onClick={handelClear}>Text-Clear</button>
  <button type="submit" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : 'red'}} onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
  <button type="submit"style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : '#212529'}}  onClick={reversed} className="btn btn-primary mx-2 my-2">Reversed</button>
  <button type="submit" style={ {backgroundColor: props.mode === 'dark' ? '#212529' : 'white', 
  color:props.mode === 'dark' ? 'white' : 'red'}}  onClick={capitalizeFirstWord} className="btn btn-primary mx-2 my-2">Capitalize First Word</button>

</div>
<div className="container" style={ {color: props.mode === 'dark' ? 'white' : '#212529'} }>
<h4>Your Text Summary</h4>
<p><b> {text.split(" ").length} </b> Words and <b> {text.length} Characters </b></p>

<p><b> { 0.008 * text.split(" ").length} </b> Minutes to read</p>
<h4 style={{ textAlign: "center" }}>Text Preview</h4>
<p style={{ border: "1px solid black", padding: "12px", borderRadius: "10px", borderColor: props.mode === 'dark' ? 'white' : 'black' }}>
  {text.length > 0 ? text : "Enter in the above box to preview here!"}
</p>

</div>
</>
  )
}


