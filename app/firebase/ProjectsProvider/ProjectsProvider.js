import firebase from '../firebase';

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})

function getProjects() {
    return new Promise((resolve, reject) => {
        let projects = [];
        db.collection('projects').orderBy('order').get().then((querySnapshot) => {
            querySnapshot.forEach((project) => {
                projects.push(project.data());
            })
            resolve(projects);
        })
        .catch(error => {
            reject(error);
        })
    })
}

export { getProjects }