const QUESTIONS_DATA = [
  {
    sr_no: 1,

    question: `
      <p>
        <b>In which year was Chhatrapati Shivaji Maharaj born at Shivneri Fort?</b>
        <br/>
        छत्रपति शिवाजी महाराज का जन्म शिवनेरी किले में किस वर्ष हुआ था?
      </p>
    `,

    option1: `<p>1627 / 1627</p>`,

    option2: `<p>1630 / 1630</p>`,

    option3: `<p>1645 / 1645</p>`,

    option4: `<p>1674 / 1674</p>`,

    // IMPORTANT → React uses 0-based index
    answer: 1,

    positive_marking: 1,

    negative_marking: 0,

    solution_text: `
      <p>
        Shivaji Maharaj was born in 1630 at Shivneri Fort.
        <br/>
        शिवाजी महाराज का जन्म 1630 में शिवनेरी किले में हुआ था।
      </p>
    `,
  },

  {
    sr_no: 2,

    question: `
      <p>
        <b>Who was the religious teacher (Guru) of Shivaji Maharaj?</b>
      </p>
    `,

    option1: `<p>Samarth Ramdas</p>`,

    option2: `<p>Tukaram</p>`,

    option3: `<p>Namdev</p>`,

    option4: `<p>Eknath</p>`,

    answer: 0,

    positive_marking: 1,

    negative_marking: 0,

    solution_text: `
      <p>
        Samarth Ramdas was the guru of Shivaji Maharaj.
      </p>
    `,
  },
];

export default QUESTIONS_DATA;