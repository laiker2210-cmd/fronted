import './Nav.css'

function Nav(props) {
    let { navigation: n } = props;

    return (
        <nav>
            <ul>
                {
                    Object.keys(props.navigation).map(elem => {
                        return (
                            <li key={elem}>
                                <a href={n[elem]}>{elem}</a>
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    )

}

export default Nav;