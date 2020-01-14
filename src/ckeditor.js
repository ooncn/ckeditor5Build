/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,// 文本对齐
	autosave,// 自动保存
	CodeBlock,// 代码块
	Essentials,
	Font,//字体
	Highlight,//高亮
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize,
	ImageUpload,
	StandardEditingMode,//受限制编辑
	Indent,
	Link,
	List,
	MediaEmbed,
	RemoveFormat,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	WordCount
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	codeBlock: {
		languages: [
			{language: 'bash', label: 'Bash/Shell'},
			{language: 'json', label: 'json'},
			{language: 'java', label: 'Java'},
			{language: 'pl', label: 'Perl'},
			{language: 'php', label: 'PHP'},
			{language: 'erlang', label: 'Erlang'},
			{language: 'goLang', label: 'goLang'},
			{language: 'ps', label: 'PowerShell'},
			{language: 'python', label: 'Python'},
			{language: 'sql', label: 'SQL'},
			{language: 'html', label: 'HTML'},
			{language: 'xml', label: 'XML'},
			{language: 'css', label: 'CSS'},
			{language: 'js', label: 'JavaScript'},
			{language: 'cpp', label: 'C/C++'},
			{language: 'c#', label: 'C#'},
			{language: 'plain', label: 'Plain Text'},
			{language: 'cf', label: 'ColdFusion'},
			{language: 'as3', label: 'ActionScript 3'},
			{language: 'delphi', label: 'Delphi'},
			{language: 'diff', label: 'Diff'},
			{language: 'groovy', label: 'Groovy'},
			{language: 'jfx', label: 'JavaFX'},
			{language: 'ruby', label: 'Ruby'},
			{language: 'scala', label: 'Scala'},
			{language: 'vb', label: 'Visual Basic'}
		]
	},
	toolbar: {
		items: [
			'removeFormat',
			'heading',
			'|',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'|',
			'alignment',
			'link',
			'bulletedList',
			'numberedList',
			'highlight',
			'|',
			'codeBlock',
			'indent',
			'outdent',
			'restrictedEditingException',
			'|',
			'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	//此值必须与webpack.config.js中定义的语言保持同步。
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn'
};
