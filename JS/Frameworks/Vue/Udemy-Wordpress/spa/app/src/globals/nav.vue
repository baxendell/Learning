<template>

	<nav class="navbar navbar-default navbar-inverse">
        <div class="container">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Single Page Application</a>
            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li v-for="item in menu_items"><a :href="item.url">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: function() {
        return {
            menu_items: []
        }
    }, 
    mounted: function() {
        jQuery.get(wp_rest_api.spa_url + 'menus/primary').always((response) => {
            this.menu_items = response;
        });
    }
}
</script>