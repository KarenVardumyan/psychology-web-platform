import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'components/shared/Accordion';
import './styles.css';

const books = [
  {
    title: 'The 7 Habits of Highly Effective People by Stephen R. Covey',
    link: 'https://icrrd.com/public/media/01-11-2020-212827The%207%20Habits%20of%20Highly%20Effective%20People.pdf',
    description: 'Այս դասական գիրքը գործնական խորհուրդներ է տալիս անձնական արդյունավետության վերաբերյալ՝ կենտրոնանալով ինչպես անձնական, այնպես էլ մասնագիտական ​​հաջողությունների հասնելու սկզբունքների վրա:',
  },
  {
    title: 'Think and Grow Rich by Napoleon Hill',
    link: 'https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf',
    description: 'Այս ազդեցիկ գիրքն ուսումնասիրում է դրական մտածողության ուժը և հաջողության սկզբունքները, որոնք հիմնված են Էնդրյու Քարնեգիի և Թոմաս Էդիսոնի նման հաջողակ անհատների հետ հարցազրույցների վրա:',
  },
  {
    title: 'Steve Jobs by Walter Isaacson',
    link: 'https://ia904703.us.archive.org/22/items/mastery-by-robert-greene-urdukutabkhanapk/23%20To%2026%20Oct-2021%20-Misc%20English%20Books/Steve%20Jobs%20By%20Walter%20Isaacson_urdukutabkhanapk.pdf',
    description: 'Այս կենսագրությունը համապարփակ պատկերացում է տալիս Apple Inc.-ի համահիմնադիր Սթիվ Ջոբսի և տեխնոլոգիայի ամենաազդեցիկ դեմքերից մեկի կյանքի և կարիերայի մասին:',
  },
  {
    title: 'Leonardo da Vinci by Walter Isaacson',
    link: 'https://www.fatsnake.com/PDF/LeonardodaVinci.pdf',
    description: 'Ուոլտեր Այզեքսոնը խորանում է Վերածննդի դարաշրջանի հայտնի նկարիչ և գյուտարար Լեոնարդո դա Վինչիի կյանքի մեջ՝ ուսումնասիրելով նրա ստեղծագործական հանճարը և նրա ստեղծագործության մնայուն ազդեցությունը:',
  },
  {
    title: 'The Diary of a Young Girl by Anne Frank',
    link: 'http://www.rhetorik.ch/Aktuell/16/02_13/frank_diary.pdf',
    description: 'Այս օրագիրը, որը գրել է Աննա Ֆրանկը, երբ նա թաքնվում էր նացիստներից Երկրորդ համաշխարհային պատերազմի ժամանակ, տրամադրում է նրա կյանքի և մտքերի ցնցող պատմությունը, որը հնարավորություն է տալիս մի հայացք նետել պատմության ամենաողբերգական ժամանակաշրջաններից մեկին:',
  },
  {
    title: 'The Magic of Thinking Big by David J. Schwartz',
    link: 'https://books.google.am/books?id=VaPNBAAAQBAJ&printsec=frontcover&source=gbs_book_other_versions_r&redir_esc=y#v=onepage&q&f=false',
    description: 'Այս գիրքը խրախուսում է ընթերցողներին դրական մտածել, դնել հավակնոտ նպատակներ և քայլեր ձեռնարկել իրենց երազանքներին հասնելու համար՝ առաջարկելով գործնական ռազմավարություններ անձնական և մասնագիտական ​​աճի համար:',
  },
];

const MotivationBooks = () => {
  return (
    <div id="books" className="booksContainer">
      <h2 className="text-center">Books</h2>
      <div id="accordion">
        {books.map((book) => {
          const { title, link, description } = book;
          return (
            <Accordion
              key={title}
              title={title}
              Children={
                <div>
                  <a href={link}
                    target="_blank">
                    Կարդալ։ </a> <br></br>
                  {description}
                </div>
              }
            />
          )
        })}
      </div>
      <button className="butt">
        <Link to="/motivation">Վերադառնալ</Link>
      </button>
    </div>
  );
};

export default MotivationBooks;
