/**
 * @license
 * Blockly Demos: Block Factory
 *
 * Copyright 2016 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview FileManagerController manages the UI for creating new blocks and
 * projects.
 *
 * @author celinechoo (Celine Choo)
 */

'use strict';

var BlockFactory = require('./factory.js');
var FileManagerView = require('./file_manager_view.js');

class FileManagerController {
  constructor(fileManagerName, ) {
    // TODO(celinechoo): add constructor.
    this.name = fileManagerName;
    this.view = new FileManagerView();
  }
}

module.exports = FileManagerController;