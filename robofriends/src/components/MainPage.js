import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { robots, onSearchChange, isPending } = this.props;
        return (
            <div className='tc' >
                <Header />
                <SearchBox searchChange={onSearchChange} />
                {isPending ? <h1>Loading</h1> :
                    <ErrorBoundary>
                        <CardList robots={this.filteredRobots()} />
                    </ErrorBoundary>
                }
            </div>
        );
    }
}

export default MainPage;
