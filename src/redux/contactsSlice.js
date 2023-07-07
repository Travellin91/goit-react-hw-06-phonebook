import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import './contactforms.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './store.js';

