/**
 * Copyright 2018 F5 Networks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('assert');
const Validator = require('../../nodejs/validator');

const validator = new Validator();

/* eslint-disable quotes, quote-props */

describe('validator', () => {
    it('should validate valid data', () => {
        const data = {
            "class": "DO",
            "declaration": {
                "schemaVersion": "1.0.0",
                "class": "Device"
            }
        };
        const validation = validator.validate(data);
        assert.strictEqual(validation.isValid, true);
        assert.strictEqual(validation.errors, null);
    });

    it('should invalidate invalid data', () => {
        it('should validate valid data', () => {
            const data = {};
            const validation = validator.validate(data);
            assert.strictEqual(validation.isValid, false);
            assert.strictEqual(Array.isArray(validation.errors), true);
        });
    });
});
