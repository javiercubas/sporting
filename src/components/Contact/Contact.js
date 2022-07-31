import './Contact.css'
export default function Contact() {
    return (
      <div class="contact">
        <div class="contact__header">
          <h3 class="contact__header__text">Get in touch</h3>
        </div>
        <hr class="contact__divider"/>
          <div class="contact__main">
            <div class="contact__main__form">
              <h3 class="contact__form__title"><i class="fa-solid fa-users"></i> Fill our contact form</h3>
              <hr class="contact__form__divider"/>
              <form action="" class="contact__form__form" >
                <label class="contact__form__form__element"><i class="fa-solid fa-user"></i>Name: <input type="text" name="name" id="name" className='contact__input'/></label>
                <label class="contact__form__form__element"><i class="fa-solid fa-at"></i>Email: <input type="email" name="mail" id="mail" className='contact__input'/></label>
                <label class="contact__form__form__element"><i class="fa-solid fa-phone"></i>Phone: <input type="number" name="name" id="name" className='contact__input'/></label>
                <label class="contact__form__form__element"><i class="fa-solid fa-futbol"></i>Position: 
                <select name="" id="" className='contact__input'>
                  <option value="" disabled selected>Pick a position</option>
                  <option value="1">Goalie</option>
                  <option value="2">Defender</option>
                  <option value="3">Midfield</option>
                  <option value="4">Fordward/Winger</option>
                </select>
                </label>
                <label class="contact__form__form__element"><i class="fa-solid fa-person"></i>Age: <input min={14} type="number" name="age" id="age" className='contact__input'/></label>
                
                <label class="contact__form__form__element"><i class="fa-solid fa-school"></i>Degree, gap year or Semester abroad?<select name="" id="select__input" className='contact__input'>
                  <option value="" disabled selected>Choose an option</option>
                  <option value="1">Undergraduate degree</option>
                  <option value="2">Masters degree</option>
                  <option value="3">Gap year</option>
                  <option value="4">Semester abroad</option>
                  <option value="5">Undecided</option>
                </select></label>
                <label class="contact__form__form__element"><i class="fa-solid fa-people-group"></i>Previous Club<input type="text" name="prev_club" id="prev_club" className='contact__input'/></label>
                <div class="contact__form__form__--submit"><button id="submit" class="contact__submit" type="submit" value="Submit">SUBMIT
                </button></div>
              </form>
            </div>
            <div class="contact__main__image"></div>
          </div>
          
      </div>
      
    );
  }
  