import React, { Component } from "react";


export class SearchInput extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div class="col-md-4 col-md-offset-3">

                <form action="" class="search-form">
                    <div class="form-group has-feedback">
                        <label for="search" class="sr-only">Search</label>
                        <input type="text" class="form-control" name="search" id="search" placeholder="search"/>
                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
            	</div>
            </form>
            </div>
        )
    }
}