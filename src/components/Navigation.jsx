import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {

    displayCategories = () => {
        const { categories } = this.props
        if (categories) {
            return categories.map(category => {
                return (
                    <Link key={category.name} to='/' className={this.props.category === category.name ? 'nav-link activeLink' : 'nav-link'} >
                        <button 
                            onClick={() => this.props.changeCategory(category.name)}
                            className={this.props.category === category.name ? 'header-navigation-button active-navigation-button' : 'header-navigation-button'}
                        >
                            {category.name}
                        </button>
                    </Link>
                )
            })
        }
    }

    render() {
                
        return (
            <div className='header-navigation'>
                { this.displayCategories() }
            </div>
        )
    }
}

export default Navigation