         
         

          
          <a id='CloudFile-constructor' name="CloudFile-constructor" class="section-anchor">&nbsp;</a>
          <div class="method-section">
            <div class="method-description">

              <h3>Constructor</h3>
              <p>
              Instantiates a <code>CloudFile</code> object.
              </p>
              <div class="method-list">
                
                <h6>Argument</h6>
                <dl class="argument-list">

                  <dt>file</dt>
                  <dd class="">file/BLOB object<span>The file/BLOB that you want to save</span></dd>
                  <div class="clearfix"></div>
                  
                </dl>

              </div>
            </div>
            <div class="method-example" id="api-summary-example">
              <code class="method-request"><span class="prompt"></span><span class="lang lang-node"><span class="highlight_js javascript">
var documentFile = new Blob([
              'This is the content of by document blob'
              ], {
                type : 'text/plain'
              });
var file = new CB.CloudFile(documentFile);</span></span></code>
            </div><!-- method-example -->
          </div> <!-- method-section -->
          <a id='CloudFile-save' name="CloudRole-save" class="section-anchor">&nbsp;</a>
          <div class="method-section">
            <div class="method-description">

              <h3>CloudFile.save( <code>[callback]</code> )</h3>
              <p>
              Saves the <code>CloudFile</code> object.
              </p>
              <div class="method-list">
                
                <h6>Argument</h6>
                <dl class="argument-list">

                  <dt>callback</dt>
                  <dd class="">Object <span> [optional] if provided must have success and error functions to handle
                   respective response.</span></dd>
                  <div class="clearfix"></div>
                  
                </dl>

                <h6>Returns</h6>
                It returns a <code>CloudFile</code> object having <code>url</code> attribute set to the URL 
                of the blob uploaded to the server if the operation is successful otherwise returns 
                an error object along with JQuery promise (if <code>callback</code> is not provided).
              </div>
            </div>
            <div class="method-example" id="api-summary-example">
              <code class="method-request"><span class="prompt"></span><span class="lang lang-node"><span class="highlight_js javascript">
var documentFile = new Blob([
            'This is the content of by document blob'
            ], {
              type : 'text/plain'
            });
var file = new CB.CloudFile(documentFile);

file.save({
  success: function(roleObj) {
    //got the file object successfully with the url to the file
  },
  error: function(err) {
    //error in uploading file
  }
});</span></span></code>
            </div><!-- method-example -->
          </div> <!-- method-section -->
          <a id='CloudFile-delete' name="CloudRole-delete" class="section-anchor">&nbsp;</a>
          <div class="method-section">
            <div class="method-description">

              <h3>CloudFile.delete( <code>[callback]</code> )</h3>
              <p>
              Saves the <code>CloudFile</code> object.
              </p>
              <div class="method-list">
                
                <h6>Argument</h6>
                <dl class="argument-list">

                  <dt>callback</dt>
                  <dd class="">Object <span> [optional] if provided must have success and error functions to handle
                   respective response.</span></dd>
                  <div class="clearfix"></div>
                  
                </dl>

                <h6>Returns</h6>
                It returns a <code>CloudFile</code> object having <code>url</code> attribute set to <code>null</code> 
                if the operation is successful otherwise returns an error object along with JQuery promise 
                (if <code>callback</code> is not provided).
              </div>
            </div>
            <div class="method-example" id="api-summary-example">
              <code class="method-request"><span class="prompt"></span><span class="lang lang-node"><span class="highlight_js javascript">
var documentFile = new Blob([
            'This is the content of by document blob'
            ], {
              type : 'text/plain'
            });
var file = new CB.CloudFile(documentFile);

file.delete({
  success: function(roleObj) {
    //file deletion successfull
  },
  error: function(err) {
    //error in deleting file
  }
});</span></span></code>
            </div><!-- method-example -->
                  <div class="clearfix"></div>
            
          </div> <!-- method-section -->