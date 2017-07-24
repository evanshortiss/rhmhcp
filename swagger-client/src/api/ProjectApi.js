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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.Rhmhcp) {
      root.Rhmhcp = {};
    }
    root.Rhmhcp.ProjectApi = factory(root.Rhmhcp.ApiClient, root.Rhmhcp.Body, root.Rhmhcp.InlineResponse200);
  }
}(this, function(ApiClient, Body, InlineResponse200) {
  'use strict';

  /**
   * Project service.
   * @module api/ProjectApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ProjectApi. 
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProject operation.
     * @callback module:api/ProjectApi~createProjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project
     * @param {module:model/Body} body The project to be created
     * @param {module:api/ProjectApi~createProjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createProject = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProject");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProject operation.
     * @callback module:api/ProjectApi~deleteProjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} projectId 
     * @param {module:api/ProjectApi~deleteProjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProject = function(projectId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling deleteProject");
      }


      var pathParams = {
        'projectId': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project/{projectId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjects operation.
     * @callback module:api/ProjectApi~listProjectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all projects
     * @param {module:api/ProjectApi~listProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */
    this.listProjects = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
