import React from "react";
/*VERSION 1*/ 
// const Quote = () => (
//     <figure>
//         <img
//             src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
//             alt="Nelson Muntz"
//         />
//         <figcaption>
//             <blockquote>
//                 Shoplifting is a victimless crime, like punching someone in the dark.
//       </blockquote>
//             <cite>Nelson Muntz</cite>
//         </figcaption>
//     </figure>
// );

/* AJOUT de PROPS*/

// const Quote = props => (
//     <figure>
//       <img src={props.image} alt={props.character} />
//       <figcaption>
//         <blockquote>{props.quote}</blockquote>
//         <cite>{props.character}</cite>
//       </figcaption>
//     </figure>
//   );
/* ECRITURE ALTERNATIVE avec props destructurées*/
const Quote = ({ quote, character, image }) => (
    <figure>
      <img src={image} alt={character} />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <cite>{character}</cite>
      </figcaption>
    </figure>
  );
  

export default Quote;