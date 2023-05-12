import React, { Component } from 'react';
import { ConversationalForm } from 'conversational-form';
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18n from './i18n';

class kyc  extends React.Component {
  constructor(props) {
    super(props);
    // this.changeLanguage('en')
    this.submitCallback = this.submitCallback.bind(this);
    this.elem = React.createRef();
  }
  lang='en';
  changeLanguage = (lng) => {
    console.log("z,knj")
    this.lang=='en' ? this.lang='es' : this.lang='en'
    i18n.changeLanguage(lng);
  }
  componentDidMount() {
    // setInterval(()=>{
    //   this.changeLanguage('en')
    //   alert("kjsaksa")
    // },10000)
    this.cf = ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: this.changeLanguage(),
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
      },
    });
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <form id="form">
          <cf-robot-message cf-questions={t('welcome')} />
          <fieldset cf-questions={t('language')}>
            <label >English
              <input  type="radio" name="language" id="intro-en" defaultValue={"en"} />
            </label>

            <label >Spanish
              <input type="radio" name="language" id="intro-es" defaultValue={"es"} />
            </label>
          </fieldset>
          <cf-robot-message cf-questions="Enter Your Personal Information" />
          <input type="text" name="fname" cf-questions={t('fname')} />
          <input type="text" name="lname" cf-questions={t('lname')} />

          <select cf-questions="Nationality(ies):" name="nationality">
            <option defaultValue="afghan">Afghan</option>
            <option defaultValue="albanian">Albanian</option>
            <option defaultValue="algerian">Algerian</option>
            <option defaultValue="american">American</option>
            <option defaultValue="andorran">Andorran</option>
            <option defaultValue="angolan">Angolan</option>
            <option defaultValue="antiguans">Antiguans</option>
            <option defaultValue="argentinean">Argentinean</option>
            <option defaultValue="armenian">Armenian</option>
            <option defaultValue="australian">Australian</option>
            <option defaultValue="austrian">Austrian</option>
            <option defaultValue="azerbaijani">Azerbaijani</option>
            <option defaultValue="bahamian">Bahamian</option>
            <option defaultValue="bahraini">Bahraini</option>
            <option defaultValue="bangladeshi">Bangladeshi</option>
            <option defaultValue="barbadian">Barbadian</option>
            <option defaultValue="barbudans">Barbudans</option>
            <option defaultValue="batswana">Batswana</option>
            <option defaultValue="belarusian">Belarusian</option>
            <option defaultValue="belgian">Belgian</option>
            <option defaultValue="belizean">Belizean</option>
            <option defaultValue="beninese">Beninese</option>
            <option defaultValue="bhutanese">Bhutanese</option>
            <option defaultValue="bolivian">Bolivian</option>
            <option defaultValue="bosnian">Bosnian</option>
            <option defaultValue="brazilian">Brazilian</option>
            <option defaultValue="british">British</option>
            <option defaultValue="bruneian">Bruneian</option>
            <option defaultValue="bulgarian">Bulgarian</option>
            <option defaultValue="burkinabe">Burkinabe</option>
            <option defaultValue="burmese">Burmese</option>
            <option defaultValue="burundian">Burundian</option>
            <option defaultValue="cambodian">Cambodian</option>
            <option defaultValue="cameroonian">Cameroonian</option>
            <option defaultValue="canadian">Canadian</option>
            <option defaultValue="cape verdean">Cape Verdean</option>
            <option defaultValue="central african">Central African</option>
            <option defaultValue="chadian">Chadian</option>
            <option defaultValue="chilean">Chilean</option>
            <option defaultValue="chinese">Chinese</option>
            <option defaultValue="colombian">Colombian</option>
            <option defaultValue="comoran">Comoran</option>
            <option defaultValue="congolese">Congolese</option>
            <option defaultValue="costa rican">Costa Rican</option>
            <option defaultValue="croatian">Croatian</option>
            <option defaultValue="cuban">Cuban</option>
            <option defaultValue="cypriot">Cypriot</option>
            <option defaultValue="czech">Czech</option>
            <option defaultValue="danish">Danish</option>
            <option defaultValue="djibouti">Djibouti</option>
            <option defaultValue="dominican">Dominican</option>
            <option defaultValue="dutch">Dutch</option>
            <option defaultValue="east timorese">East Timorese</option>
            <option defaultValue="ecuadorean">Ecuadorean</option>
            <option defaultValue="egyptian">Egyptian</option>
            <option defaultValue="emirian">Emirian</option>
            <option defaultValue="equatorial guinean">Equatorial Guinean</option>
            <option defaultValue="eritrean">Eritrean</option>
            <option defaultValue="estonian">Estonian</option>
            <option defaultValue="ethiopian">Ethiopian</option>
            <option defaultValue="fijian">Fijian</option>
            <option defaultValue="filipino">Filipino</option>
            <option defaultValue="finnish">Finnish</option>
            <option defaultValue="french">French</option>
            <option defaultValue="gabonese">Gabonese</option>
            <option defaultValue="gambian">Gambian</option>
            <option defaultValue="georgian">Georgian</option>
            <option defaultValue="german">German</option>
            <option defaultValue="ghanaian">Ghanaian</option>
            <option defaultValue="greek">Greek</option>
            <option defaultValue="grenadian">Grenadian</option>
            <option defaultValue="guatemalan">Guatemalan</option>
            <option defaultValue="guinea-bissauan">Guinea-Bissauan</option>
            <option defaultValue="guinean">Guinean</option>
            <option defaultValue="guyanese">Guyanese</option>
            <option defaultValue="haitian">Haitian</option>
            <option defaultValue="herzegovinian">Herzegovinian</option>
            <option defaultValue="honduran">Honduran</option>
            <option defaultValue="hungarian">Hungarian</option>
            <option defaultValue="icelander">Icelander</option>
            <option defaultValue="indian">Indian</option>
            <option defaultValue="indonesian">Indonesian</option>
            <option defaultValue="iranian">Iranian</option>
            <option defaultValue="iraqi">Iraqi</option>
            <option defaultValue="irish">Irish</option>
            <option defaultValue="israeli">Israeli</option>
            <option defaultValue="italian">Italian</option>
            <option defaultValue="ivorian">Ivorian</option>
            <option defaultValue="jamaican">Jamaican</option>
            <option defaultValue="japanese">Japanese</option>
            <option defaultValue="jordanian">Jordanian</option>
            <option defaultValue="kazakhstani">Kazakhstani</option>
            <option defaultValue="kenyan">Kenyan</option>
            <option defaultValue="kittian and nevisian">Kittian and Nevisian</option>
            <option defaultValue="kuwaiti">Kuwaiti</option>
            <option defaultValue="kyrgyz">Kyrgyz</option>
            <option defaultValue="laotian">Laotian</option>
            <option defaultValue="latvian">Latvian</option>
            <option defaultValue="lebanese">Lebanese</option>
            <option defaultValue="liberian">Liberian</option>
            <option defaultValue="libyan">Libyan</option>
            <option defaultValue="liechtensteiner">Liechtensteiner</option>
            <option defaultValue="lithuanian">Lithuanian</option>
            <option defaultValue="luxembourger">Luxembourger</option>
            <option defaultValue="macedonian">Macedonian</option>
            <option defaultValue="malagasy">Malagasy</option>
            <option defaultValue="malawian">Malawian</option>
            <option defaultValue="malaysian">Malaysian</option>
            <option defaultValue="maldivan">Maldivan</option>
            <option defaultValue="malian">Malian</option>
            <option defaultValue="maltese">Maltese</option>
            <option defaultValue="marshallese">Marshallese</option>
            <option defaultValue="mauritanian">Mauritanian</option>
            <option defaultValue="mauritian">Mauritian</option>
            <option defaultValue="mexican">Mexican</option>
            <option defaultValue="micronesian">Micronesian</option>
            <option defaultValue="moldovan">Moldovan</option>
            <option defaultValue="monacan">Monacan</option>
            <option defaultValue="mongolian">Mongolian</option>
            <option defaultValue="moroccan">Moroccan</option>
            <option defaultValue="mosotho">Mosotho</option>
            <option defaultValue="motswana">Motswana</option>
            <option defaultValue="mozambican">Mozambican</option>
            <option defaultValue="namibian">Namibian</option>
            <option defaultValue="nauruan">Nauruan</option>
            <option defaultValue="nepalese">Nepalese</option>
            <option defaultValue="new zealander">New Zealander</option>
            <option defaultValue="ni-vanuatu">Ni-Vanuatu</option>
            <option defaultValue="nicaraguan">Nicaraguan</option>
            <option defaultValue="nigerien">Nigerien</option>
            <option defaultValue="north korean">North Korean</option>
            <option defaultValue="northern irish">Northern Irish</option>
            <option defaultValue="norwegian">Norwegian</option>
            <option defaultValue="omani">Omani</option>
            <option defaultValue="pakistani">Pakistani</option>
            <option defaultValue="palauan">Palauan</option>
            <option defaultValue="panamanian">Panamanian</option>
            <option defaultValue="papua new guinean">Papua New Guinean</option>
            <option defaultValue="paraguayan">Paraguayan</option>
            <option defaultValue="peruvian">Peruvian</option>
            <option defaultValue="polish">Polish</option>
            <option defaultValue="portuguese">Portuguese</option>
            <option defaultValue="qatari">Qatari</option>
            <option defaultValue="romanian">Romanian</option>
            <option defaultValue="russian">Russian</option>
            <option defaultValue="rwandan">Rwandan</option>
            <option defaultValue="saint lucian">Saint Lucian</option>
            <option defaultValue="salvadoran">Salvadoran</option>
            <option defaultValue="samoan">Samoan</option>
            <option defaultValue="san marinese">San Marinese</option>
            <option defaultValue="sao tomean">Sao Tomean</option>
            <option defaultValue="saudi">Saudi</option>
            <option defaultValue="scottish">Scottish</option>
            <option defaultValue="senegalese">Senegalese</option>
            <option defaultValue="serbian">Serbian</option>
            <option defaultValue="seychellois">Seychellois</option>
            <option defaultValue="sierra leonean">Sierra Leonean</option>
            <option defaultValue="singaporean">Singaporean</option>
            <option defaultValue="slovakian">Slovakian</option>
            <option defaultValue="slovenian">Slovenian</option>
            <option defaultValue="solomon islander">Solomon Islander</option>
            <option defaultValue="somali">Somali</option>
            <option defaultValue="south african">South African</option>
            <option defaultValue="south korean">South Korean</option>
            <option defaultValue="spanish">Spanish</option>
            <option defaultValue="sri lankan">Sri Lankan</option>
            <option defaultValue="sudanese">Sudanese</option>
            <option defaultValue="surinamer">Surinamer</option>
            <option defaultValue="swazi">Swazi</option>
            <option defaultValue="swedish">Swedish</option>
            <option defaultValue="swiss">Swiss</option>
            <option defaultValue="syrian">Syrian</option>
            <option defaultValue="taiwanese">Taiwanese</option>
            <option defaultValue="tajik">Tajik</option>
            <option defaultValue="tanzanian">Tanzanian</option>
            <option defaultValue="thai">Thai</option>
            <option defaultValue="togolese">Togolese</option>
            <option defaultValue="tongan">Tongan</option>
            <option defaultValue="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
            <option defaultValue="tunisian">Tunisian</option>
            <option defaultValue="turkish">Turkish</option>
            <option defaultValue="tuvaluan">Tuvaluan</option>
            <option defaultValue="ugandan">Ugandan</option>
            <option defaultValue="ukrainian">Ukrainian</option>
            <option defaultValue="uruguayan">Uruguayan</option>
            <option defaultValue="uzbekistani">Uzbekistani</option>
            <option defaultValue="venezuelan">Venezuelan</option>
            <option defaultValue="vietnamese">Vietnamese</option>
            <option defaultValue="welsh">Welsh</option>
            <option defaultValue="yemenite">Yemenite</option>
            <option defaultValue="zambian">Zambian</option>
            <option defaultValue="zimbabwean">Zimbabwean</option>
          </select>
          <input type="text" name= "address" cf-questions= "Address (optional):" />
          <input type="text" name= "CityOfResidence" cf-questions= "Country and city of residence:" defaultValue= "Dubai" />
          <select cf-questions="What is your marital status?" name="MaritalStatus" >
            <option defaultValue="single">single</option>
            <option defaultValue="married">married</option>
            <option defaultValue="divorced">divorced</option>
            <option defaultValue="widow">widow</option>
          </select>

          {/* <input type="radio" name="language" cf-questions="Please choose your desired language for the application" cf-label="English" defaultValue="English" /> */}
        </form>
        <div id="cf-context" role="cf-context"></div>

      </div>
    );
  }
}

// export default withTranslation()(MyForm);

const TranslatedPage = withTranslation()(kyc);

export default class MyForm extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <TranslatedPage />
      </I18nextProvider>
    );
  }
}