import 'whatwg-fetch'

class NotesDataService {
    API_ROOT = "http://localhost:4000";
    JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    getNotes = () => {
      console.log(`fetching ${this.API_ROOT}/notes`)
      return fetch(`${this.API_ROOT}/notes`)
        .then((response) => response.json());
    }

    addOrUpdateNote = (note) => {
      console.log(`posting a note: ${JSON.stringify(note)} to ${this.API_ROOT}/notes`);
      try{
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let requestParams = {   method: 'POST',
                                body: JSON.stringify(note), 
                                headers: headers,
                                mode: 'cors'};

        let request = new Request(`${this.API_ROOT}/notes`, requestParams);

        return fetch(request)
            .then((response) => response.json())

      } catch(e){
          console.log(`error posting e: ${e}`)
          return e;
      }
    }
}

export default NotesDataService;
