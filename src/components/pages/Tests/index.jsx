import './styles.css';
import { useState } from 'react';
import { useFormik } from 'formik';

function Test() {

  const [resultTitle, setResultTitle] = useState('');

  const onSubmit = (values) => {
    const totalPoints = Object.values(values)
      .map(i => Number(i))
      .reduce((total, currentPoint) => total += currentPoint, 0);

    if (totalPoints <= 15) {
      setResultTitle('Դուք անչափ վստահող եք և դատում եք մարդկանց մասին միայն արտաքինով։ Իսկ երբ արդյունքում պարզվում է, որ ձեր հերթական գնահատականը նորից սխալ է, ապա դուք զարմանում եք և հիասթափվում։ Շատ սխալներ դուք կատարում եք մարդկանց սխալ գնահատելու պատճառով։')
    }
    if (totalPoints >= 16 && totalPoints <= 25) {
      setResultTitle('Դուք, որպես կանոն, վստահ չեք ձեր կարծիքի վրա և հեշտությամբ եք ընդունում ուրիշի տեսակետը։ Եվ դա, վերջիվերջո, կհանգեցնի այն բանին, որ դուք կզրկվեք ուրիշների մասին կարծիք կազմելու ունակությունից։')
    }
    if (totalPoints >= 26 && totalPoints <= 34) {
      setResultTitle('Դուք կարող եք օբյեկտիվորեն գնահատել շրջապատին։ Դուք իսկապես ունեք մարդկանց ճանաչելու «հոտառություն» և կարողանում եք որոշել մարդու բնավորությունը։ Դուք որևէ անձի վերաբերյալ չեք ընդունի ուրիշի կարծիքը։ Եվ եթե հասկանաք, որ սխալվել եք, ապա չեք վախենա ընդունել այն։')
    }
    if (totalPoints >= 35) {
      setResultTitle('Ձեզ համար շատ հեշտ է կարծիք կազմել որևէ մեկի մասին։ Բացի այդ, դուք կարողանում եք արտահայտել ձեր կարծիքը, քանի որ համոզված եք, որ չեք սխալվում։ Բայց արդյոք նպատակահարմար է բոլորին ասել, թե ինչ եք մտածում իրենց մասին։ Դրանով դուք կարող եք առաջացնել ինչ- որ մեկի զայրույթը։ Թե ուզու՞մ եք ցույց տալ, որ ոչ ոքի չի հաջողվի ձեզ խաբել: Բայց դա ամենախելացի դիրքորոշումը չէ։')
    }
    setTimeout(() => { window.scrollBy(0, 10000); })
  };

  const formik = useFormik({
    onSubmit,
    initialValues: {},
  });

  const resetForm = () => {
    setResultTitle('');
    formik.resetForm();
  }
  console.log('//////////////          ', formik.values)
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
      <header className="header">
        <h2 className="title">Հոգեբանական թեստեր</h2>
      </header>

      <div className="container">
        <div className="test-container">
          <h3 className="test-title">
            1. Ձեր կարծիքով ինչպիսին են արդյոք նրանք, ովքեր հետևում են քաղաքավարության կանոններին։
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="1-1" name="q-1" value="2" checked={formik?.values['q-1'] === '2'}/>
              <label className="radio-label" htmlFor="1-1">Բարեհամբույր են, շփման ընթացքում հաճելի</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="1-2" name="q-1" value="4" checked={formik?.values['q-1'] === '4'}/>
              <label className="radio-label" htmlFor="1-2">Խիստ դաստիարակված</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="1-3" name="q-1" value="1" checked={formik?.values['q-1'] === '1'}/>
              <label className="radio-label" htmlFor="1-3">Ուղղակի թաքցնում են իրենց իրական բնավորությունը</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            2. Դուք գիտեք որևէ ընտանեկան զույգի, որը երբեք չի վիճում: Ձեր կարծիքով
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="2-1" name="q-2" value="2" checked={formik?.values['q-2'] === '2'}/>
              <label className="radio-label" htmlFor="2-1">Նրանք երջանիկ են</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="2-2" name="q-2" value="1" checked={formik?.values['q-2'] === '1'}/>
              <label className="radio-label" htmlFor="2-2">Նրանք անտարբեր են միմյանց նկատմամբ</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="2-3" name="q-2" value="4" checked={formik?.values['q-2'] === '4'}/>
              <label className="radio-label" htmlFor="2-3">Նրանք չունեն վստահություն միմյանց նկատմամբ</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            3. Դուք առաջին անգամ տեսնում եք մի մարդու, որը սկսում է պատմել Ձեզ անեկդոտներ, դուք մտածում եք, որ նա
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="3-1" name="q-3" value="1" checked={formik?.values['q-3'] === '1'}/>
              <label className="radio-label" htmlFor="3-1">Սրամիտ է</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="3-2" name="q-3" value="2" checked={formik?.values['q-3'] === '2'}/>
              <label className="radio-label" htmlFor="3-2">Իրեն անվստահ է զգում և փորձում է դուրս գալ անհարմար իրավիճակից</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="3-3" name="q-3" value="4" checked={formik?.values['q-3'] === '4'}/>
              <label className="radio-label" htmlFor="3-3">ՈՒզում է թողնել հաճելի տպավորություն</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            4. Դուք ինչ-որ մեկի հետ խոսում եք շատ հետաքրքիր թեմայի վերաբերյալ և ձեր զրուցակիցը վարում է այն ժեստերի օգնությամբ, դուք համարում եք, որ
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="4-1" name="q-4" value="4" checked={formik?.values['q-4'] === '4'}/>
              <label className="radio-label" htmlFor="4-1">Անհանգստանում է</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="4-2" name="q-4" value="1" checked={formik?.values['q-4'] === '1'}/>
              <label className="radio-label" htmlFor="4-2">Անկեղծ չէ</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            5. Դուք որոշել եք ձեր հաճախորդներին ավելի լավ ճանաչել գտնում եք, որ պետք է.
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="5-1" name="q-5" value="1" checked={formik?.values['q-5'] === '1'}/>
              <label className="radio-label" htmlFor="5-1">Հրավիրել նրանց որևէ տեղ</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="5-2" name="q-5" value="2" checked={formik?.values['q-5'] === '2'}/>
              <label className="radio-label" htmlFor="5-2">Հետևել նրանց աշխատանքում</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            6. Ինչ-որ մեկը ռեստորանում տալիս է շատ մեծ լրավճար: Դուք վստահ եք, որ
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="6-1" name="q-6" value="4" checked={formik?.values['q-6'] === '4'}/>
              <label className="radio-label" htmlFor="6-1">Նա ուզում է զարմացնել մյուսներին</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="6-2" name="q-6" value="2" checked={formik?.values['q-6'] === '2'}/>
              <label className="radio-label" htmlFor="6-2">Նա ակնկալում է մատուցողի բարյացակամ վերաբերմունքը</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="6-3" name="q-6" value="1" checked={formik?.values['q-6'] === '1'}/>
              <label className="radio-label" htmlFor="6-3">Նա մեծահոգի անձնավորություն է</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            7. Եթե որևէ մեկը չի սիրում խոսակցությունն առաջինը սկսել ապա դուք գտնում եք, որ նա
          </h3>
          <div className="questions">
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="7֊1" name="q-7" value="2" checked={formik?.values['q-7'] === '2'}/>
              <label className="radio-label" htmlFor="7֊1">Ինչ-որ բան թաքցնում է և չի ուզում խոսել</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="7֊2" name="q-7" value="4" checked={formik?.values['q-7'] === '4'}/>
              <label className="radio-label" htmlFor="7֊2">Շատ երկչոտ է</label><br />
            </div>
            <div className="question-answer-container">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="7֊3" name="q-7" value="1" checked={formik?.values['q-7'] === '1'}/>
              <label className="radio-label" htmlFor="7֊3">Վախենում է, որ իրեն չհասկանան</label><br />
            </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            8. Արդյոք գտնում եք, որ նեղ ճակատը նշանակում է.
          </h3>
          <div className="questions">
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="8֊1" name="q-8" value="1" checked={formik?.values['q-8'] === '1'}/>
            <label className="radio-label" htmlFor="8֊1">Անընդունակություն</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="8֊2" name="q-8" value="2" checked={formik?.values['q-8'] === '2'}/>
            <label className="radio-label" htmlFor="8֊2">Համառություն</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="8֊3" name="q-8" value="4" checked={formik?.values['q-8'] === '4'}/>
            <label className="radio-label" htmlFor="8֊3">Հստակորեն ոչինչ չեք կարող ասել</label><br />
          </div>
            <br></br>
          </div>
        </div>

        <div className="test-container">
          <h3 className="test-title">
            9. Այն մարդը, որը չի նայում ձեր աչքերին, ձեր կարծիքով.
          </h3>
          <div className="questions">
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="9֊1" name="q-9" value="1" checked={formik?.values['q-9'] === '1'}/>
            <label className="radio-label" htmlFor="9֊1">Տառապում է թերարժեքության բարդույթով</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="9֊2" name="q-9" value="4" checked={formik?.values['q-9'] === '4'}/>
            <label className="radio-label" htmlFor="9֊2">Անկեղծ չէ</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="9֊3" name="q-9" value="2" checked={formik?.values['q-9'] === '2'}/>
            <label className="radio-label" htmlFor="9֊3">Չափազանց թափթփված է</label><br />
          </div>
            <br></br>
          </div>
        </div>


        <div className="test-container">
          <h3 className="test-title">
            10. Բարձր եկամուտ ունեցող անձնավորությունը միշտ գնում է էժան ապրանք։ Ձեր կարծիքով
          </h3>
          <div className="questions">
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="10֊1" name="q-10" value="4" checked={formik?.values['q-10'] === '4'}/>
            <label className="radio-label" htmlFor="10֊1">Համեստ է</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="10֊2" name="q-10" value="2" checked={formik?.values['q-10'] === '2'}/>
            <label className="radio-label" htmlFor="10֊2">Գծուծ է</label><br />
          </div>
          <div className="question-answer-container">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} className="radio-btn" type="radio" id="10֊3" name="q-10" value="1" checked={formik?.values['q-10'] === '1'}/>
            <label className="radio-label" htmlFor="10֊3">Նա խնայող է</label><br />
          </div>
            <br></br>
          </div>
        </div>

        <button id="submit-button">Հաստատել</button>

        {resultTitle && (
          <div id="result-container">
            <h3 id="result-title">{resultTitle}</h3>
            <button id="reset-button" onClick={resetForm}>Կրկին փորձել</button>
          </div>
        )}

      </div>
    </form>
  )
}

export default Test;


