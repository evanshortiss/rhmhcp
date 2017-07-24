/**
 * RHMHCP
 * Red Hat Mobile Hot Code Push API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: kxiang@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Rhmhcp);
  }
}(this, function(expect, Rhmhcp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rhmhcp.Project();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Project', function() {
    it('should create an instance of Project', function() {
      // uncomment below and update the code to test Project
      //var instane = new Rhmhcp.Project();
      //expect(instance).to.be.a(Rhmhcp.Project);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Rhmhcp.Project();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Rhmhcp.Project();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Rhmhcp.Project();
      //expect(instance).to.be();
    });

    it('should have the property deploymentTarget (base name: "deploymentTarget")', function() {
      // uncomment below and update the code to test the property deploymentTarget
      //var instane = new Rhmhcp.Project();
      //expect(instance).to.be();
    });

  });

}));
