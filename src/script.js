//Script for the interaction with our contract 

  
    var realestateContract;
    var userAccount;

    function startApp() {

        var address = "0xE43aE772c8d97a4Da0444b30732A9527E44498C6";
        var abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "BuyRealEstate",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "name": "_realestateImages",
                        "type": "string"
                    },
                    {
                        "name": "_location",
                        "type": "string"
                    },
                    {
                        "name": "_pieces",
                        "type": "uint256"
                    }
                ],
                "name": "createRealEstate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_seller",
                        "type": "address"
                    },
                    {
                        "name": "_comission",
                        "type": "uint256"
                    }
                ],
                "name": "getPaid",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "takeOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "transfert",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfert",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_approved",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    },
                    {
                        "name": "_comission",
                        "type": "uint256"
                    }
                ],
                "name": "updateComission",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    },
                    {
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "name": "_image",
                        "type": "string"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_location",
                        "type": "string"
                    },
                    {
                        "name": "_pieces",
                        "type": "uint256"
                    }
                ],
                "name": "updateRealestate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "updateStatus",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "withdrawCom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "_balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getAllRealestates",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getBalance",
                "outputs": [
                    {
                        "name": "_balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "getPrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getRealestateId",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "getRealestatesByOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "getSeller",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "getStatus",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_realestateId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "realestates",
                "outputs": [
                    {
                        "name": "idRealestate",
                        "type": "uint256"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "salerAddress",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "name": "images",
                        "type": "string"
                    },
                    {
                        "name": "comission",
                        "type": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "location",
                        "type": "string"
                    },
                    {
                        "name": "pieces",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "realestateToOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];

        web3js = window.web3;
        realestateContract = new web3js.eth.Contract(abi, address);

        userAccount = web3.eth.accounts[0];

        getRealestates().then(displayRealestates);
        getRealestates().then(displayAdminRealestates);
        checkOwner();
        checkOwner2();

        //Charger les realestates du compte courant
        web3js.eth.getAccounts().then(function(accounts) 
        {
            getRealestatesByOwner(accounts[0])
            .then(displayOwnerRealestates);
        });

    
      /* var accountInterval = setInterval(function() {
        // Check if account has changed
            if (web3.eth.accounts[0] !== userAccount) {
                userAccount = web3.eth.accounts[0];
                // Call a function to update the UI with the new account
                getRealestates()
                .then(displayRealestates);
                console.log('TEST3');
            }
        }, 100); */
  
    }



//function for the display of all real estates 


    function displayRealestates(ids) {
        $("#realestate").empty();
        var seller;
        for (id of ids) {
            
        // Look up realestate details from our contract. Returns a `realestate` object
        getRealestatesDetails(id)
        .then(function(realestate) {
            // Using ES6's "template literals" to inject variables into the HTML.
            // Append each one to our #realestate div
            seller = realestate.salerAddress;
            
            if (realestate.status == true) { 
                $("#realestate").append(`<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                <div class="card-head">
                    <a href="#"><img class="card-img-top" src="${realestate.images}" alt=""></a>
                </div>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">${realestate.name}</a>
                    </h4>
                    <h5>${realestate.price} ETH </h5>
                    <p class="card-text" id="realestate-details">
                        <div>
                            Nombre de pieces : ${realestate.pieces} pieces 
                        </div>
                        <div style = "margin-bottom: 15px;">
                            Ville : ${realestate.location} 
                        </div>
                        <div>
                            <button class="btn btn-info paid" data-id="${realestate.idRealestate}" data-seller="${realestate.salerAddress}" data-comission="${realestate.comission}"> BUY </button>
                        </div>
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
                </div>
                </div>`);
            }

        });
        }
    }


//function for the display of real estates by owner

    function displayOwnerRealestates(ids) {
        $("#re-table").empty();
        for (id of ids) {
            getRealestatesDetails(id)
            .then(function(realestate) {
                // Using ES6's "template literals" to inject variables into the HTML.
                // Append each one to our #zombies div
               console.log(realestate.status);
            
            if (realestate.status == true){
                $("#re-table").append(`<tr>
                <td><input type="checkbox" class="checkthis" /></td>
                <td>${realestate.name}</td>
                <td>${realestate.price}</td>
                <td>${realestate.images}</td>
                <td>${realestate.comission}</td>
                <td>${realestate.location}</td>
                <td>${realestate.pieces}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit" data-id="${realestate.idRealestate}" data-price="${realestate.price}" data-image="${realestate.images}" data-name="${realestate.name}" data-location="${realestate.location}" data-pieces="${realestate.pieces}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><p data-placement="top" data-toggle="tooltip" ><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Mask </button></p></td>
            </tr>`);

            } else if (realestate.status == false) {
                $("#re-table").append(`<tr>
                <td><input type="checkbox" class="checkthis" /></td>
                <td>${realestate.name}</td>
                <td>${realestate.price}</td>
                <td>${realestate.images}</td>
                <td>${realestate.comission}</td>
                <td>${realestate.location}</td>
                <td>${realestate.pieces}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit" data-id="${realestate.idRealestate}" data-price="${realestate.price}" data-image="${realestate.images}" data-name="${realestate.name}" data-location="${realestate.location}" data-pieces="${realestate.pieces}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Show </button></td>
            </tr>`);

            }

            console.log("after table");
            console.log(realestate.idRealestate);

            })

        }

    }


// function for the display of real estate for admin view

    function checkOwner() {

        web3js.eth.getAccounts().then(function(accounts) {
            $.when(ownerf()).then(function(owner){
                if(accounts[0] == owner){
                    
                    document.getElementById("contract-ad").style = "display: block;";
                }

            }).then(function(params) {
                console.log("after if");
                
            });
        })


        /*console.log("after if 1");
        console.log(own);
        console.log(user);*/

    }


    function checkOwner2() {


        web3js.eth.getAccounts().then(function(accounts) {
            $.when(ownerf()).then(function(owner){
                if(accounts[0] == owner){
                    
                    document.getElementById("contract-ad2").style ="display: block;";
                    document.getElementById("contract-ad3").style = "display: block;";
                }

            }).then(function(params) {
                console.log("after if2");
                
            });
        })

    }


    function displayAdminRealestates(ids) {
        $("#admin-table").empty();
        for (id of ids) {
            getRealestatesDetails(id)
            .then(function(realestate) {
                // Using ES6's "template literals" to inject variables into the HTML.
                // Append each one to our #zombies div
               //console.log(realestate.status);
            
            if (realestate.status == true){
                $("#admin-table").append(`<tr>
                <td><input type="checkbox" class="checkthis" /></td>
                <td>${realestate.name}</td>
                <td>${realestate.price}</td>
                <td>${realestate.images}</td>
                <td>${realestate.comission}</td>
                <td>${realestate.location}</td>
                <td>${realestate.pieces}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit-com" data-id="${realestate.idRealestate}"  data-comission="${realestate.comission}"  class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#editcom" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><p data-placement="top" data-toggle="tooltip" ><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Mask </button></p></td>
            </tr>`);

            } else if (realestate.status == false) {
                $("#admin-table").append(`<tr>
                <td><input type="checkbox" class="checkthis" /></td>
                <td>${realestate.name}</td>
                <td>${realestate.price}</td>
                <td>${realestate.images}</td>
                <td>${realestate.comission}</td>
                <td>${realestate.location}</td>
                <td>${realestate.pieces}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit-com" data-id="${realestate.idRealestate}"  data-comission="${realestate.comission}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#editcom" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Show </button></td>
            </tr>`);

            }

            console.log("after table");
            console.log(realestate.idRealestate);

            })

        }

    }


// functions of access used for the differents real estates displays

    function getRealestatesDetails(id) {
        return realestateContract.methods.realestates(id).call()
    }

    function realestateToOwner(id) {
        return realestateContract.methods.realestateToOwner(id).call()
    }

    function getRealestates() {
        return realestateContract.methods.getAllRealestates().call()
    }

    function getRealestatesByOwner(owner) {
        return realestateContract.methods.getRealestatesByOwner(owner).call()
    }

    function ownerf() {
        console.log("je suis dans owner");
        return realestateContract.methods.owner().call()
    }

//function for the real estate creation

    $('#createRE').click(function () 
    {       
        var name = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var img = document.getElementById("image").value;
        var pieces = document.getElementById("pieces").value;
        var location = document.getElementById("location").value;
        createRealEstate(name, price, img, location, pieces);
    })


    function createRealEstate(name, price, img, location, pieces) {

        const accounts = ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);

        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.createRealEstate(name, price, img, location, pieces).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            document.getElementById("create-form").reset();
        }).catch(function(tx)
        {
            console.log(tx);
        })

    }



// function for the real estates payement 

    $('#realestate').on('click', '.paid', function(){

        var realestateId = $(this).data('id');
        var seller = $(this).data('seller');
        var comission = $(this).data('comission');
        console.log("inside paid buton");
        console.log(realestateId);
        //console.log(getRealestatesDetails(id));
        console.log('Before  buy estage');
        buyEstate(realestateId, seller, comission);
        // $.when(buyEstate(realestateId, seller, comission)).then(function(){
        //     console.log('After buy estate');
        // });
    })


    function buyEstate(realestateId, seller, comission) {
        
        web3js.eth.getAccounts().then(function(accounts) {
            $.when(getPrice(realestateId)).then(function(result){
                return realestateContract.methods.BuyRealEstate(realestateId).send({ from: accounts[0], value: web3.utils.toWei(result, 'ether') });
            }).then(function(params) {
                console.log("Payment");
                getPaid(seller, comission);
            });
        }).catch(function(tx){
            console.log(tx);
        })
    }


    function getPaid(seller, comission) {
        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.getPaid(seller, comission).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            console.log("get paid execute");
            document.location.reload(true);

        }).catch(function(tx)
        {
            console.log(tx);
            console.log("get paid fail");
        })

    }

    function getPrice(realestateId) {
        return realestateContract.methods.getPrice(realestateId).call()
    }


//functions for withdraw comissions
$('#collect-div').on('click', '#collect-com', function(){
    withdrawCom();
})

function withdrawCom() {
    web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.withdrawCom().send({ from: accounts[0]});
        }).then(function(tx) 
        {
            console.log("withdraw execute");
            document.location.reload(true);

        }).catch(function(tx)
        {
            console.log(tx);
            console.log("withdraw fail");
        })
}


// functions for the realestate edition by their owner

    // function load when the edit button is clicked and that charged the edit form
    $('#re-table').on('click', '#btn-edit', function(){

        var id = $(this).data('id');
        var price = $(this).data('price');
        var image = $(this).data('image');
        var name = $(this).data('name');
        var location = $(this).data('location');
        var pieces = $(this).data('pieces');
        
        $("#edit-form").empty();

        $("#edit-form").append(`<div class="form-group">
        <input class="form-control " type="text" id="name" placeholder="Name" value="${name}" >
      </div> 
        <div class="form-group">
            <input class="form-control " type="text" id="price" placeholder="Price" value="${price}">
        </div>
        <div class="form-group">
            <input class="form-control " type="text" id="image" placeholder="Image Link" value="${image}">
        </div>
        <div class="form-group">
            <input class="form-control " type="text" id="location" placeholder="Location" value="${location}">
        </div>
        <div class="form-group">
            <input class="form-control " type="text" id="pieces" placeholder="Nombre de pieces" value="${pieces}">
        </div>
        <input class="form-control " type="hidden" id="idR" placeholder="Id" value="${id}">
      `);

    })

    //function load when update realestate button is clicked
    $('#edit').on('click', '#btn-update', function(){

        var realestateId = document.getElementById("idR").value;
        var price = document.getElementById("price").value;
        var image = document.getElementById("image").value;
        var name = document.getElementById("name").value;
        var location = document.getElementById("location").value;
        var pieces = document.getElementById("pieces").value;
        
        updateRealestate(realestateId, price, image, name, location, pieces)
        console.log("inside click update");
        
    })


    function updateRealestate(id, price, image, name, location, pieces) {
        web3js.eth.getAccounts().then(function(accounts) 
        {
            console.log("inside update function");
            return realestateContract.methods.updateRealestate(id, price, image, name, location, pieces).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            console.log("update ok");
            document.location.reload(true);
        }).catch(function(tx)
        {
            console.log(tx);
        })

   }


//functions for the edition of comission by the contract owner

    $('#admin-table').on('click', '#btn-edit-com', function(){

        var id = $(this).data('id');
        var comission = $(this).data('comission');
        
        $("#editcom-form").empty();

        $("#editcom-form").append(` 
        <div class="form-group">
            <input class="form-control " type="text" id="comission-edit" placeholder="Comission" value="${comission}" >
        </div> 
        <input class="form-control " type="hidden" id="idR-com" placeholder="Image Link" value="${id}">
        `);

    })


    $('#editcom').on('click', '#btn-update-com', function(){

        var realestateId = document.getElementById("idR-com").value;
        var comission = document.getElementById("comission-edit").value;
        
        console.log(realestateId);
        console.log(comission);

        updateComRealestate(realestateId, comission);
        
    })


   function updateComRealestate(id, comission) {
    web3js.eth.getAccounts().then(function(accounts) 
    {
        return realestateContract.methods.updateComission(id, comission).send({ from: accounts[0]});
    }).then(function(tx) 
    {
        document.location.reload(true);
    }).catch(function(tx)
    {
        console.log(tx);
    })

}


//functions to update the status / mask real estates


   $('#re-table').on('click', '#btn-mask', function(){

        var realestateId = $(this).data('id');
        var status = $(this).data('status');

        console.log("inside btn mask");
        console.log(realestateId);
        console.log(status);
        
        updateRealestateStatus(realestateId);
    })

//for the admin view
    $('#admin-table').on('click', '#btn-mask', function(){

        var realestateId = $(this).data('id');
        var status = $(this).data('status');

        console.log("inside btn mask");
        console.log(realestateId);
        console.log(status);
        
        updateRealestateStatus(realestateId);
    })


    function updateRealestateStatus(id) {
        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.updateStatus(id).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            document.location.reload(true);
        }).catch(function(tx)
        {
            console.log(tx);
        })

    }


// Load of the document setting

    $(document).ready(function() 
    {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.enable()
          }
          else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
          }
          else {
            window.alert('Non etheruem browser detected. You should consider trying to install metamask')
          }

        startApp();

    })
