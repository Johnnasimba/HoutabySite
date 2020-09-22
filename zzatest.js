let order;
    let filteredApplilcants = this.state.Applicants;
    if (this.state.orderDir === 'asc') {
      order = 1
    } else {
      order = -1
    }
    filteredApplilcants = filteredApplilcants.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 + order;
      }
    }).filter(eachItem => {
      return (
        eachItem['firstName']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['lastName']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['firstJob']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['secondJob']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['thirdJob']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['forthJob']
          .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) 
      )
    });



    <button className="fa fa-search btn" type="submit" ></button>