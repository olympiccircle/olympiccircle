import { language } from "./locale";

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();


  // Check if a hash value exists in the URL
  if (window.location.hash) {

    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#en") {
        header_about_us.textContent = language.eng.header_about_us;
        header_donations.textContent = language.eng.header_donations;
        header_contacts.textContent= language.eng.header_contacts;
    
    
    
    
    
    
    
    
    
    
    
    }
    else if (window.location.hash == "#ua") {
        header_about_us.textContent = language.ua.header_about_us;
        header_donations.textContent = language.ua.header_donations;
        header_contacts.textContent= language.ua.header_contacts;
    }
    else if (window.location.hash == "#ru") {
        header_about_us.textContent = language.ru.header_about_us;
        header_donations.textContent = language.ru.header_donations;
        header_contacts.textContent= language.ru.header_contacts;
      }
  }
}