import React from 'react';
import './TickCards.css';
import TickCardItem from './TickCardItem';

function TickCards() {
  return (
    <div className='tickcards'>
      <h1>High quality general practice</h1>
      <div className='tickcards__container'>
        <div className='tickcards__wrapper'>
          <ul className='tickcards__items'>
            <TickCardItem
              src='images/checkmark.svg'
              header='Treatment of Skin Cancer'
              text='Dr Suresh offers both surgical and non surgical treatment of skin cancers, including curettage, creams, cryotherapy, daylight-PDT and skin cancer surgery'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Chronic Disease Management'
              text='General Practitioners excel at caring for our patients with chronic diseases. We also do health assessments and care plans with our practice nurse including heart checks and health checks'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Ease of access'
              text='Dr Suresh prides himself on being accessible to his patients. Same or next day appointments are often available, and urgent walk-ins will always be seen, although there may be a small wait'
            />
          </ul>
          <ul className='tickcards__items'>
          <TickCardItem
              src='images/checkmark.svg'
              header='Same day biopsies'
              text='Shave and punch biopsies can usually be done on the same day as your appointment. They are done under local anaesthetic only so you can drive afterwards. Excisional biopsies need to be booked in advance'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Results by phone/text'
              text='Dr Suresh understands how busy you are and so he gives most results over the phone. He only asks you to come in if it is required, saving you time and money. Complicated results will be face to face'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Affordability'
              text='Dr Suresh is a private billing doctor, although bulk billing is available for children under 16 or those in financial hardship. Where there are charges the gap fee is relatively low. You will only be asked to come in for repeat appointments if it is required, saving you time and money'
            />
          </ul>
          <ul className='tickcards__items'>
          <TickCardItem
              src='images/checkmark.svg'
              header='Counselling and Psychology'
              text='Dr Suresh has a keen interest in mental health and is currently studying GP-FPS training. GPs who undertake GP-Focussed Psychological Strategies (GP-FPS) have advcanced mental health training and are able to offer counselling and psychological services for their patients'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Telehealth'
              text='Dr Suresh understands how precious your time is and sometimes you do not want or need to come to the surgery in person. This is where a telehealth appointment may be suitable for you. Dr Suresh is happy to provide both telephone and video consultations for his patients'
            />
            <TickCardItem
              src='images/checkmark.svg'
              header='Covid-Safe'
              text='Undoubtedly the pandemic has created a lot of difficulties for both patients and doctors, but the challenges can be overcome. Dr Suresh prides himself on being as safe as possible for his patients. All patients are screened before being seen, temperatures are checked, and between consultations all surfaces are cleaned and wiped down '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TickCards;