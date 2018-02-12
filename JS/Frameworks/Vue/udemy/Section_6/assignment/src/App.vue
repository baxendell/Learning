<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <div class="form-group">

                        <label for="name">Full Name
                            <input 
                                type="text"
                                id="name"
                                class="form-control"
                                v-model="userData.fullName"></input>
                        </label>
                    </div>


                    <div class="form-group">

                        <label for="mail">Email
                            <input 
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email"></input>
                        </label>

                    </div>                    

                    <div class="form-group">

                        <label for="name">Password
                            <input 
                                type="text"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password"></input>
                        </label>
                    </div>


                    <div class="form-group">
                        <h3>Store Data?</h3>
                        <label for="yes">Yes
                            <input 
                                type="radio"
                                id="yes"
                                value="yes"
                                class="form-control"
                                v-model="storeData"></input>
                        </label>

                        <label for="no">No
                            <input 
                                type="radio"
                                id="no"
                                value="no"
                                class="form-control"
                                v-model="storeData"></input>
                        </label>                        
                    </div>

                    <button
                            class="btn btn-primary"
                            @click.prevent = "submitted">Submit!
                    </button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.fullName}} 
                            <a v-if="!isEditted" href="#" @click.prevent="editName">Edit</a>
                        </p>
                        <div v-if="isEditted" class="form-group">
                            <input 
                                type="text"
                                class="form-control" 
                                value="userData.fullName"
                                v-model="userData.fullName">
                            </input>
                            <a href="#" @click.prevent="isEditted = false">Submit</a>
                        </div>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>

                    <button 
                        class="btn btn-primary"
                        @click.prevent = "isSubmitted = false">Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: '',
                },
                storeData: 'yes',
                isSubmitted: false,
                isEditted: false,
            };
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            },
            editName() {
                this.isEditted = true;
            }
        }
    }
</script>

<style>
</style>
