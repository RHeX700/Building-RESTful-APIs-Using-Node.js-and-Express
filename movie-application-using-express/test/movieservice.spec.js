const sinon = require("sinon");
const { expect } = require('chai')
const movieservice = require("../src/movieservice");

const supertest = require("supertest");

describe("Test movie service", () => {
  it("should save movie and return that object", (done) => {
    let movie = {
        "movieName": "Sherlock Holmes",
        "director": "Franklin",
        "rating": "10",
        "id": 7
    };
    // var create = sinon.stub(movieservice, "saveMovieDetails");
    movieservice.saveMovieDetails(movie, (err, results) => {
      expect(err).to.be.equals(null);
      expect(results.movieName).to.be.equals("Sherlock Holmes");
      expect(results.director).to.be.equals("Franklin");
      expect(results.rating).to.be.equals("10");
      expect(results.id).to.be.equals(7);
    });
    // sinon.assert.calledOnceWithMatch(create, movie);
    done();
    // create.restore();
  });
  it("should return all movies", (done) => {
    // var getAll = sinon.stub(movieservice, "getMovies");
    movieservice.getMovies((err, results) => {
      expect(err).to.be.equals(null);
      expect(results[0].movieName).to.be.equals("True Grit");
      expect(results[1].director).to.be.equals("The Guard");
      expect(results[2].rating).to.be.equals("E.T");
      expect(results[3].id).to.be.equals("Moonrise Kingdom");
    });
    // sinon.assert.calledOnce(getAll);
    done();
    // getAll.restore();
  });
  it("should return movie given the movie id", (done) => {
    // var findById = sinon.stub(movieservice, "getMovieById");
    movieservice.getMovieById(7,  (err, results) => {
      expect(err).to.be.equals(null);
      expect(results.movieName).to.be.equals("Sherlock Holmes");
      expect(results.director).to.be.equals("Franklin");
      expect(results.rating).to.be.equals("10");
      expect(results.id).to.be.equals(7);
    });
    // sinon.assert.calledOnce(findById);
    done();
    // findById.restore();
  });

});