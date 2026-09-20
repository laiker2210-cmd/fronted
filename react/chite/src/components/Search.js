import React from "react";
import './Search.css';

class Search extends React.Component {
    state = {
        search: "matrix",
        type: "all",
        page: 1
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.seachMovie(this.state.search, this.state.type, this.state.page);
        }
    }

    handleFilter = (event) => {
        this.setState(
            { type: event.target.dataset.type },
            () => { this.props.seachMovie(this.state.search, this.state.type, this.state.page) }
        );
    }

    prevPage = () => {
        this.setState(
            this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 },
            () => { this.props.seachMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 },
            () => { this.props.seachMovie(this.state.search, this.state.type, this.state.page) }
        )
    }

    render() {
        let limit = 10;
        let totalPage = Math.ceil(this.props.totalCount / limit);

        let num = [];
        for (let i = 1; i <= totalPage; i++) {
            num.push(i)
        }



        return (
            <>

                <div className="search">
                    <input
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn"
                        onClick={() => this.props.seachMovie(this.state.search, this.state.type, this.state.page)}
                    >Search</button>
                </div>
                <div className="radio">
                    <label htmlFor="all">
                        <input type="radio" name="type" id="all" data-type="all" checked={this.state.type === "all"} onChange={this.handleFilter} />All
                    </label>
                    <label htmlFor="movie">
                        <input type="radio" name="type" id="movie" data-type="movie" checked={this.state.type === "movie"} onChange={this.handleFilter} />Movie only
                    </label>
                    <label htmlFor="series">
                        <input type="radio" name="type" id="series" data-type="series" checked={this.state.type === "series"} onChange={this.handleFilter} />Series only
                    </label>
                    <label htmlFor="game">
                        <input type="radio" name="type" id="game" data-type="game" checked={this.state.type === "game"} onChange={this.handleFilter} />Games only
                    </label>
                </div>
                <div className="navigation">
                    <button className="btn" onClick={this.prevPage} style={{ opacity: this.state.page === 1 ? ".5" : "1" }}>Prev</button>

                    <div className="items">
                        {
                            num.map((el, index) => (
                                <button className="btn" key={index}>{el}</button>
                            ))
                        }
                    </div>

                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>
            </>
        )
    }
}

export default Search;