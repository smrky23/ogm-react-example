import "./App.css";
import {
  FormattedDate,
  FormattedList,
  FormattedMessage,
  FormattedRelativeTime,
  FormattedTime,
  IntlProvider,
} from "react-intl";
import messages from "./messages";
import { useEffect, useState } from "react";

function App() {
  const [locale, setLocale] = useState(
    localStorage.getItem("locale") || navigator.language
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value="tr-TR">tr-TR</option>
          <option value="en-US">en-US</option>
          <option value="de-DE">de-DE</option>
        </select>

        <h1>
          <FormattedMessage id="title" />

          <br/>
          <br/>

        </h1>

      </div>
    </IntlProvider>
  );
}

export default App;
