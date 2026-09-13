import './Article.css'
import mars from './icons/mars.png'
import female from './icons/female.png'

function Article(props) {
    let { db } = props;

    return (
        <div className='app'>
            {
                Object.keys(db).map((elem, index) => {
                    const person = db[elem];
                    /*  let icon;
                     if (db[elem].pol === female) {
                         icon = female
                     } else {
                         icon = mars;
                     } */
                    return (
                        <div className="card" key={index}>
                            <img src={person.photo} alt=""/>
                            <div className="name">
                                {person.name} {person.surname}
                            </div>
                            <div className="pol">
                                {/* <img src={icon} alt="" /> */}
                                <img src={person.pol === "female" ? female : mars} alt=""/>
                            </div>
                            <div className="age">
                                {person.age}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
};


















export default Article;