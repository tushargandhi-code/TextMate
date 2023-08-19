import React, { useState } from 'react';
import logo1 from "../images/logo.png"

export default function About(props) {

  let myStyle = {

    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
}

	return (
		<div className="container my-3">
		<h1 className="my-3" style= {{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
    <hr className='my-4' style= {{color: props.mode ==='dark'?'white':'#042743'}} />
		<div class="container my-4">
    <div class="row featurette d-flex justify-content-center align-items-center">
      <div class="col-md-7" style= {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 class="featurette-heading fw-normal lh-1">We started TextMate in 2023.  <span class="text-muted ">helps users to create, change, edit, open and view plain text files. </span></h2>
        <p class="lead my-2">Editors or text editors are software programs that enable the user to create and edit text files. In the field of programming, the term editor usually refers to source code editors that include many special features for writing and editing code.  A text editor program provides the capacity to edit, format and manipulate plain text. No matter if you have a mobile phone, computer, console or tablet this will work perfectly!</p>
      </div>
      <div class="col-md-5" >
        <img  src={logo1}   alt=""/>
      </div>
    </div>
  </div>

  <div class="container my-4">
    <div class="row featurette d-flex justify-content-center align-items-center">
      <div class="col-md-7 order-md-2"style= {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 class="featurette-heading fw-normal lh-1">TextMate is a free character counter tool. <span class="text-muted">that provides instant character count and word count statistics for a given text.</span></h2>
        <p class="lead my-2">TextMate reports the no of words and characters. Thus is suitable for writing text with with word and character used. All results are immediately shown and it is ridiculously easy to use and of course, the service is completely free.You can copy and paste your text with the characters to count in the text area above, or you can type your characters and words into the text area.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img  src="https://images.contentstack.io/v3/assets/blt7359e2a55efae483/blt6a77b03d17db6353/633ef28a8edd6411a37cbe7c/CS_-_GraphQL_vs_REST_-_3.2.png"   alt=""/>
      </div>
    </div>
  </div>

  <div class="container my-4">
    <div class="row featurette d-flex justify-content-center align-items-center">
      <div class="col-md-7"style= {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 class="featurette-heading fw-normal lh-1">TextMate is a complete package. <span class="text-muted">You'll love the slick user interface, extraordinary features and amazing texture</span></h2>
        <p class="lead my-2">This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , Safari , Opera. It suits to count characters in Facebook , Blog , Excel document , Books , Pdf document , Essays , etc... . Textutils give you a way to analyze your text quickly and effectively. Be it word count ,character count and many more.This is a sophisticated text editor for code, markup and prose. </p>
      </div>
      <div class="col-md-5">
         <img  src="https://imgv3.fotor.com/images/share/rename-photo-of-jpg-png-and-pdf.jpg"   alt=""/>
      </div>
    </div>
  </div>

</div>	
	)
}