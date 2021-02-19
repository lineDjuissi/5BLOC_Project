//Script for the interaction with our contract 

  
    var realestateContract;
    var userAccount;

    function startApp() {

        var address = "0x2aEe51bE0435dbc0AF39D73629C12F77E3917AB5";
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
                        "indexed": false,
                        "name": "realEstateId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "salerAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "images",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "comission",
                        "type": "uint256"
                    }
                ],
                "name": "NewRealEstate",
                "type": "event"
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
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "TestTransf1",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
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
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "name": "_image",
                        "type": "string"
                    },
                    {
                        "name": "_comission",
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
                "inputs": [],
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
                <a href="#"><img class="card-img-top" src="${realestate.images}" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">${realestate.name}</a>
                    </h4>
                    <h5>${realestate.price} ETH </h5>
                    <p class="card-text" id="realestate-details">
                        Seller : ${seller} IMAGE ${realestate.images}  id : ${realestate.idRealestate}!
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
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit" data-id="${realestate.idRealestate}" data-price="${realestate.price}" data-image="${realestate.images}" data-comission="${realestate.comission}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><p data-placement="top" data-toggle="tooltip" ><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Mask </button></p></td>
            </tr>`);

            } else if (realestate.status == false) {
                $("#re-table").append(`<tr>
                <td><input type="checkbox" class="checkthis" /></td>
                <td>${realestate.name}</td>
                <td>${realestate.price}</td>
                <td>${realestate.images}</td>
                <td>${realestate.comission}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="btn-edit" data-id="${realestate.idRealestate}" data-price="${realestate.price}" data-image="${realestate.images}" data-comission="${realestate.comission}" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil">Edit</span></button></p></td>
                <td><button id="btn-mask" data-id="${realestate.idRealestate}" data-status="${realestate.status}" class="btn btn-danger btn-xs"> Show </button></td>
            </tr>`);

            }

            console.log("after table");
            console.log(realestate.idRealestate);

            })

        }

    }


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


    $('#createRE').click(function () 
    {       
        var name = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var img = document.getElementById("image").value;
        createRealEstate(name, price, img)
    })


    function createRealEstate(name, price, img) {

        const accounts = ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);

        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.createRealEstate(name, price, img).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            document.getElementById("create-form").reset();
        }).catch(function(tx)
        {
            console.log(tx);
        })

    }


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

    $('#re-table').on('click', '#btn-edit', function(){

        var id = $(this).data('id');
        var price = $(this).data('price');
        var image = $(this).data('image');
        var comission = $(this).data('comission');
        
        $("#edit-form").empty();

        $("#edit-form").append(` <div class="form-group">
        <input class="form-control " type="text" id="price" placeholder="Price" value="${price}">
      </div>
      <div class="form-group">
        <input class="form-control " type="text" id="image" placeholder="Image Link" value="${image}">
      </div>
      <div class="form-group">
        <input class="form-control " type="text" id="comission" placeholder="Comission" value="${comission}" >
      </div> 
      <input class="form-control " type="hidden" id="idR" placeholder="Image Link" value="${id}">
      `);

    })






    $('#edit').on('click', '#btn-update', function(){

        var realestateId = document.getElementById("idR").value;
        var price = document.getElementById("price").value;
        var image = document.getElementById("image").value;
        var comission = document.getElementById("comission").value;
        
        console.log(realestateId);
        console.log(price);
        console.log(image);
        console.log(comission);
        updateRealestate(realestateId, price, image, comission)
        
    })


    function updateRealestate(id, price, image, comission) {
        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.updateRealestate(id, price, image, comission).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            document.location.reload(true);
        }).catch(function(tx)
        {
            console.log(tx);
        })

   }



   $('#re-table').on('click', '#btn-mask', function(){

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
        //console.log('test1');

    })
