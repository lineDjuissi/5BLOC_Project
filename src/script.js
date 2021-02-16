//Script for the interaction with our contract 

  
    var realestateContract;
    var userAccount;

    function startApp() {

        var address = "0x2f3C7A372Ccb7eEd4C4Af74A8E4217E6401606e9";
        var abi = [
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
            "name": "approve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
                }
            ],
            "name": "NewRealEstate",
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
                },
                {
                    "name": "_realestateId",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
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
            "name": "Transfer",
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
        ids = [1, 2];

        getRealestates().then(displayRealestates);
        displayOwnerRealestates(ids);

       var accountInterval = setInterval(function() {
        // Check if account has changed
        if (web3.eth.accounts[0] !== userAccount) {
            userAccount = web3.eth.accounts[0];
            // Call a function to update the UI with the new account
            getRealestates()
            .then(displayRealestates);
            console.log('TEST3');
        }
        }, 100); 

    }


    function displayRealestates(ids) {
        $("#realestate").empty();
        for (id of ids) {
        // Look up realestate details from our contract. Returns a `realestate` object
        getRealestatesDetails(id)
        .then(function(realestate) {
            // Using ES6's "template literals" to inject variables into the HTML.
            // Append each one to our #zombies div
            $("#realestate").append(`<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${realestate.images}" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">${realestate.name}</a>
                </h4>
                <h5>${realestate.price} ETH </h5>
                <p class="card-text" id="realestate">
                    Seller : ${realestate.salerAddress} IMAGE ${realestate.images}  id : ${id}!
                    <input type='hidden' name='realestateId' value="$id" id = "realestateId" />

                    <div>
                        <button class="btn-info" id="buy">BUY </button>
                    </div>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>`);
        });
        }
    }

    function displayOwnerRealestates(ids) {
        $("#re-table").empty();
        for (id of ids) {
            // Using ES6's "template literals" to inject variables into the HTML.
            // Append each one to our #zombies div
            $("#re-table").append(`<tr>
            <td><input type="checkbox" class="checkthis" /></td>
            <td>Mohsin</td>
            <td>Irshad</td>
            <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
            <td>isometric.mohsin@gmail.com</td>
            <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
            <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
          </tr>`);
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

    function getRealestatesByOwner() {
        return realestateContract.methods.getAllRealestates().call()
    }


    $('#createRE').click(function () 
    {
            
        var name = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var img = document.getElementById("image").value;
        var comission = document.getElementById("comission").value;
        createRealEstate(name, price, img)
    
    })


    function createRealEstate(name, price, img) {

        const accounts = ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);

        web3js.eth.getAccounts().then(function(accounts) 
        {
            //return contract.methods.increment().send({from: accounts[0]});
            return realestateContract.methods.createRealEstate(name, price, img).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            console.log(tx);
        }).catch(function(tx)
        {
            console.log(tx);
        })

    }



    $('#buy').click(function () 
    {   
        var realestateId = document.getElementById("realestateId").value;
        buyEstate(realestateId);
    })


    function getPaid() {
        return realestateContract.methods.getPaid().call()
    }

    function buyEstate(realestateId) {
        const accounts = ethereum.request({ method: 'eth_accounts' });
        console.log(accounts);

        web3js.eth.getAccounts().then(function(accounts) 
        {
            return realestateContract.methods.BuyRealEstate(realestateId).send({ from: accounts[0]});
        }).then(function(tx) 
        {
            console.log(tx);
        }).catch(function(tx)
        {
            console.log(tx);
        })

    }



    $(document).ready(function() 
    {

        /*// Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        } else {
        // Handle the case where the user doesn't have MetaMask installed
        // Probably show them a message prompting them to install MetaMask
            console.log("load matamask");
        } */

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
        console.log('test1');

    })
