import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';
import { GET_CART_ITEMS } from '../../graphql/resolvers';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const CartDropdownContainer = () => (
	<Mutation mutation={TOGGLE_CART_HIDDEN}>
		{toggleCartHidden => (
			<Query query={GET_CART_ITEMS}>
				{({ data: { cartItems } }) => (
					<CartDropdown
						cartItems={cartItems}
						toggleCartHidden={toggleCartHidden}
					/>
				)}
			</Query>
		)}
	</Mutation>
);

export default CartDropdownContainer;
