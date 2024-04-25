import Person from "../components/person";
import Criminal from "../components/criminal";

// Get a random person (not criminal) from the API https://randomuser.me/api/
export async function getPersonData(){
    const res = await fetch('https://randomuser.me/api/');
    if(!res.ok){
        throw new Error('Failed to fetch person data');
    }
    const data = await res.json();
    const person = data.results[0];
    return {
        name: `${person.name.first} ${person.name.last}`,
        image: person.picture.large
    };
}

// Get a random criminal from the FBI API https://api.fbi.gov/wanted/v1/list
export async function getCriminalData(){
    const res = await fetch('https://api.fbi.gov/wanted/v1/list');
    if(!res.ok){
        throw new Error('Failed to fetch criminal data');
    }
    const data = await res.json();
    const randomCriminalIndex = Math.floor(Math.random() * data.items.length);
    const criminal = data.items[randomCriminalIndex];
    return {
        name: criminal.title.split(" - ")[0],
        image: criminal.images[0].original
    };
}

// Fetch and display a person
export async function displayPerson(){
    const person = await getPersonData();
    return (
        <Person name={person.name} image={person.image} />
    );
}

// Fetch and display a criminal
export async function displayCriminal(){
    const criminal = await getCriminalData();
    return (
        <Criminal name={criminal.name} image={criminal.image} />
    );
}