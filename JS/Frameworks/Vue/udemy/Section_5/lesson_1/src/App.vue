<template>
    <div class="container">
        <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
    	<appNewQuote @quoteAdded="NewQuote"></appNewQuote>
    	<appQuoteGrid @quoteDeleted="deleteQuote" :quotes="quotes"></appQuoteGrid>
    	<div class="row">
    		<div class="col-xs-12 text-center">
    			<div class="alert alert-info">Info: Click on Quote to Delete It</div>
			</div>
		</div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'; 
	import QuoteGrid from './components/QuoteGrid.vue';	
	import NewQuote from './components/NewQuote.vue';	
    export default {
        data: function() {
        	return {
        		quotes: [
        			'Just a quote to see something'
    			],
        		maxQuotes: 10,
        	};
        },
        methods: {
        	NewQuote(quote) {
        		if(this.quotes.length >= this.maxQuotes) {
                    return alert ("Please delete quotes first!");
                }
                this.quotes.push(quote);
        	},
        	deleteQuote(index) {
        		this.quotes.splice(index, 1);
        	}
        },
        components: {
        	appQuoteGrid: QuoteGrid,
        	appNewQuote: NewQuote,
            appHeader: Header,
        }
    }
</script>

<style>
</style>
