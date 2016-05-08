'use strict';

const fs = require('fs');

class StatsSaver {

    constructor(runnerName) {
        this.runner = runnerName;
    }

    saveReport(statsFile, stats, done) {
        let executionObj = {
            "runner": this.runner,
            "date": new Date(),
            "tasks": _format(stats)
        };
        this.savedData = JSON.parse(fs.readFileSync('./localJson/stats.json', 'utf8'));
        this.savedData.executions.push(executionObj);
        fs.writeFile(statsFile, JSON.stringify(this.savedData, null, 4), (err) => {
          if (err) return console.log(err);
          done();
        });
    }
}

module.exports = StatsSaver;

///////////////////////

function _format(statsArr) {
    return statsArr.map((taskArr) => {
        return {
            "name": taskArr[0],
            "time": taskArr[1]
        };
    });
}

function _readLocalJSON(reader) {

}
