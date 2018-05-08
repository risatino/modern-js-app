labelFormatter: function () {
          if(this.name.length > 40) {
            return this.name.substring(0,37) + '...' 
          } else {
            return this.name;
          }
        },