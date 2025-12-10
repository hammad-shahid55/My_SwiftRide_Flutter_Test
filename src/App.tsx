import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Code, Zap, Shield, Activity, Target, TrendingUp, Award } from 'lucide-react';

const FlutterTestPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Flutter Test Implementation",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-6">🧪</div>
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Flutter Test</h1>
          <h2 className="text-3xl text-gray-700 mb-8">Automated Testing Tool</h2>
          <div className="bg-blue-50 p-6 rounded-lg inline-block">
            <p className="text-2xl font-semibold text-blue-800 mb-2">SwiftRide Application Testing</p>
          </div>
          <div className="mt-12 space-y-2">
            <p className="text-xl text-blue-600 font-semibold">Group Members:</p>
            <p className="text-lg text-blue-600">Maria Ashraf (01-134221-037)</p>
            <p className="text-lg text-blue-600">Hammad Shahid (01-134221-026)</p>
          </div>
          <p className="text-sm text-gray-500 mt-8 uppercase tracking-wide">SOFTWARE QUALITY ASSURANCE – ASSIGNMENT 4</p>
        </div>
      )
    },
    
    // Slide 2: Overview/Introduction
    {
      title: "Overview - What is Flutter Test?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <p className="text-xl leading-relaxed">
              Flutter Test is a <span className="font-bold underline">built-in testing framework</span> within the Flutter SDK that provides comprehensive testing capabilities for Flutter applications
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Key Purpose</h3>
            <p className="text-gray-700 leading-relaxed">
              Ensures UI reliability, logic correctness, and full app functionality through automated testing without external dependencies
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border-t-4 border-green-500 text-center">
              <Code className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2 text-green-900">Unit Testing</h3>
              <p className="text-sm text-gray-700">Tests individual functions and business logic</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border-t-4 border-purple-500 text-center">
              <Activity className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2 text-purple-900">Widget Testing</h3>
              <p className="text-sm text-gray-700">Validates UI components without real devices</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border-t-4 border-orange-500 text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2 text-orange-900">Integration Testing</h3>
              <p className="text-sm text-gray-700">End-to-end testing on devices/emulators</p>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <p className="text-center font-semibold text-lg">
              ✨ Official Framework - No External Dependencies Required
            </p>
          </div>
        </div>
      )
    },

    // Slide 3: Types of Testing Supported
    {
      title: "Types of Testing Supported",
      content: (
        <div className="space-y-5">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-8 border-green-500">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-green-700">Unit Testing</h3>
                <p className="text-gray-700 mb-2">Tests individual functions, methods, and business logic in isolation</p>
                <div className="bg-green-50 p-3 rounded mt-2">
                  <p className="text-sm font-semibold text-green-800">✓ Fast execution (milliseconds)</p>
                  <p className="text-sm font-semibold text-green-800">✓ Validates data models and utilities</p>
                  <p className="text-sm font-semibold text-green-800">✓ Tests form validation logic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-8 border-purple-500">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-purple-700">Widget Testing</h3>
                <p className="text-gray-700 mb-2">Validates UI components without needing a real device or emulator</p>
                <div className="bg-purple-50 p-3 rounded mt-2">
                  <p className="text-sm font-semibold text-purple-800">✓ Tests button clicks and interactions</p>
                  <p className="text-sm font-semibold text-purple-800">✓ Verifies text field behavior</p>
                  <p className="text-sm font-semibold text-purple-800">✓ Checks widget rendering and styling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-8 border-orange-500">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-orange-700">Integration Testing</h3>
                <p className="text-gray-700 mb-2">End-to-end testing on actual devices or emulators</p>
                <div className="bg-orange-50 p-3 rounded mt-2">
                  <p className="text-sm font-semibold text-orange-800">✓ Complete user journey validation</p>
                  <p className="text-sm font-semibold text-orange-800">✓ Tests navigation flows</p>
                  <p className="text-sm font-semibold text-orange-800">✓ Verifies full app functionality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Key Features
    {
      title: "Key Features of Flutter Test",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Zap className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="font-bold text-xl text-blue-900">Fast Execution</h3>
              </div>
              <p className="text-gray-700">Tests run in milliseconds with automated workflows and efficient test runners</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-10 h-10 text-green-600 mr-3" />
                <h3 className="font-bold text-xl text-green-900">Built-in Assertions</h3>
              </div>
              <p className="text-gray-700">Rich set of matchers, expect statements, and golden test support for UI comparison</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Code className="w-10 h-10 text-purple-600 mr-3" />
                <h3 className="font-bold text-xl text-purple-900">Mocking Support</h3>
              </div>
              <p className="text-gray-700">Mock APIs, external services, and dependencies easily with built-in mocking framework</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Activity className="w-10 h-10 text-orange-600 mr-3" />
                <h3 className="font-bold text-xl text-orange-900">Widget Control</h3>
              </div>
              <p className="text-gray-700">Complete control over widget rendering, interaction, and lifecycle management</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Shield className="w-10 h-10 text-pink-600 mr-3" />
                <h3 className="font-bold text-xl text-pink-900">CI/CD Ready</h3>
              </div>
              <p className="text-gray-700">Seamless automation pipeline support with GitHub Actions, Jenkins, and more</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <Target className="w-10 h-10 text-indigo-600 mr-3" />
                <h3 className="font-bold text-xl text-indigo-900">Deterministic</h3>
              </div>
              <p className="text-gray-700">Reliable and consistent test outcomes with no flaky tests or random failures</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: WHAT - SwiftRide Implementation
    {
      title: "WHAT: SwiftRide Test Implementation",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-3 flex items-center justify-center">
              <CheckCircle className="mr-3 w-10 h-10" />
              All Tests Passing: 33/33 ✅
            </h3>
            <div className="grid grid-cols-3 gap-6 text-center mt-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-5xl font-bold">3</p>
                <p className="text-lg mt-2">Unit Tests</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-5xl font-bold">30</p>
                <p className="text-lg mt-2">Widget Tests</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-5xl font-bold">10.6s</p>
                <p className="text-lg mt-2">Total Runtime</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Test Structure Overview</h3>
            <div className="space-y-3 font-mono text-sm bg-gray-50 p-4 rounded">
              <div className="flex items-center text-blue-600 font-bold text-lg">
                <span className="mr-2">📁</span> test/widget_test/ (30 tests)
              </div>
              <div className="ml-8 space-y-2 text-gray-700">
                <div>├── custom_text_field_test.dart <span className="text-green-600 font-bold">(10 tests)</span></div>
                <div>├── main_button_test.dart <span className="text-green-600 font-bold">(8 tests)</span></div>
                <div>└── custom_text_widget_test.dart <span className="text-green-600 font-bold">(12 tests)</span></div>
              </div>
              <div className="flex items-center text-purple-600 font-bold text-lg mt-4">
                <span className="mr-2">📁</span> test/unit_test/ (3 tests)
              </div>
              <div className="ml-8 space-y-2 text-gray-700">
                <div>└── simple_test.dart <span className="text-green-600 font-bold">(3 tests)</span></div>
              </div>
              <div className="flex items-center text-orange-600 font-bold text-lg mt-4">
                <span className="mr-2">📁</span> integration_test/
              </div>
              <div className="ml-8 text-gray-700">
                <div>├── app_test.dart <span className="text-blue-600">(E2E ready)</span></div>
                <div>└── driver_flow_test.dart <span className="text-blue-600">(E2E ready)</span></div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="text-center text-xl font-bold text-blue-800">
              🎯 Status: Production Ready - Zero Failures
            </p>
          </div>
        </div>
      )
    },

    // Slide 6: WHAT - Components Tested
    {
      title: "WHAT: Components Tested in Detail",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-5 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="font-bold text-xl mb-3 text-purple-900 flex items-center">
              <Code className="mr-2" /> CustomTextField Widget (10 Tests)
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Label and hint text display verification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Email field validation with format checking</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Password visibility toggle functionality</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Form validation for empty fields</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Error message display and styling</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Text input interaction handling</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="font-bold text-xl mb-3 text-blue-900 flex items-center">
              <Target className="mr-2" /> MainButton Widget (8 Tests)
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Button text display and rendering</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">OnPressed callback execution</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Custom background colors support</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Gradient styling verification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Text color customization</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Button dimensions validation</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="font-bold text-xl mb-3 text-green-900 flex items-center">
              <Activity className="mr-2" /> CustomTextWidget (12 Tests)
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Title and subtitle rendering</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Font family customization</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Font weight and size validation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Color application verification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Text alignment checking</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Spacing between elements</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: HOW - Implementation Setup
    {
      title: "HOW: Test Setup & Configuration",
      content: (
        <div className="space-y-5">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
              <Code className="mr-2 text-blue-600" /> 1. Dependencies Installation
            </h3>
            <div className="bg-gray-900 text-green-400 p-5 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-500"># pubspec.yaml</div>
              <pre>{`dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
  mockito: ^5.4.4
  build_runner: ^2.4.9`}</pre>
            </div>
            <div className="mt-3 text-sm text-gray-600 bg-green-50 p-3 rounded">
              <CheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
              All dependencies successfully installed and configured
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
              <Zap className="mr-2 text-purple-600" /> 2. Test Execution Commands
            </h3>
            <div className="space-y-3">
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-500"># Run unit tests</div>
                <div className="mb-2">$ flutter test test/simple_test.dart --verbose</div>
                <div className="text-yellow-400">✅ Result: 3/3 tests passed (3.3s)</div>
              </div>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-500"># Run widget tests</div>
                <div className="mb-2">$ flutter test test/widget_test/ --verbose</div>
                <div className="text-yellow-400">✅ Result: 30/30 tests passed (7.3s)</div>
              </div>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-500"># Run all tests</div>
                <div className="mb-2">$ flutter test</div>
                <div className="text-yellow-400">✅ Result: 33/33 tests passed (~10.6s)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: HOW - Test Structure Pattern
    {
      title: "HOW: Test Structure & Best Practices",
      content: (
        <div className="space-y-5">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-2xl mb-4 text-blue-900">Test Structure Pattern</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">📝</div>
                <h4 className="font-bold text-blue-700 mb-2">Arrange</h4>
                <p className="text-sm text-gray-700">Set up test data and widget state</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">▶️</div>
                <h4 className="font-bold text-purple-700 mb-2">Act</h4>
                <p className="text-sm text-gray-700">Execute the action to test</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">✓</div>
                <h4 className="font-bold text-green-700 mb-2">Assert</h4>
                <p className="text-sm text-gray-700">Verify expected outcomes</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Implementation Best Practices</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-900">Isolated Test Cases</span>
                </div>
                <p className="text-sm text-gray-700 ml-7">Each test runs independently without affecting others</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-semibold text-purple-900">Descriptive Test Names</span>
                </div>
                <p className="text-sm text-gray-700 ml-7">Clear names describing what is being tested</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-900">Proper Setup/Teardown</span>
                </div>
                <p className="text-sm text-gray-700 ml-7">Clean initialization and resource disposal</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="font-semibold text-orange-900">Mock External Services</span>
                </div>
                <p className="text-sm text-gray-700 ml-7">Simulated APIs and dependencies for consistency</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-5 rounded-lg shadow-lg">
            <p className="text-center text-lg font-semibold">
              🎯 Result: Clean, maintainable, and reliable test suite with 100% success rate
            </p>
          </div>
        </div>
      )
    },

    // Slide 9: WHERE - Application Areas
    {
      title: "WHERE: Testing Application Areas",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-2xl mb-4">UI Components</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Custom form fields and inputs</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Interactive buttons and actions</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Text display widgets and labels</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Layout components and containers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-2xl mb-4">Validation Logic</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Email format validation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Password requirements checking</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Empty field validation</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Error message display logic</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl mb-3">🖱️</div>
              <h3 className="font-bold text-2xl mb-4">User Interactions</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Button click handlers</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Form submission flows</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Password visibility toggle</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Text input changes and events</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-2xl mb-4">Styling & Themes</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Color customization and themes</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Font styling and typography</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Spacing and alignment rules</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Responsive layouts and sizing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border-2 border-indigo-400 shadow-md">
            <h3 className="font-bold text-xl mb-2 text-indigo-900 text-center">Integration Tests Ready</h3>
            <p className="text-center text-gray-700">Full E2E tests prepared for complete user journeys and driver-specific flows</p>
          </div>
        </div>
      )
    },

    // Slide 10: Usage Scenarios
    {
      title: "Usage Scenarios in SwiftRide",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-center">Real-World Testing Applications</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-blue-900">Testing Custom UI Components</h3>
                  <p className="text-gray-700 mb-2">Validated all custom widgets like CustomTextField and MainButton</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800">✓ Ensured consistent UI behavior across the application</p>
                    <p className="text-blue-800">✓ Verified styling, colors, and responsive design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-green-900">Validating Form Logic</h3>
                  <p className="text-gray-700 mb-2">Automated testing of email and password validation rules</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800">✓ Email format validation with regex patterns</p>
                    <p className="text-green-800">✓ Password strength and empty field checking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-purple-900">Running Integration Tests</h3>
                  <p className="text-gray-700 mb-2">End-to-end testing for complete user journeys in SwiftRide</p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="text-purple-800">✓ Sign-in and registration flows</p>
                    <p className="text-purple-800">✓ Driver-specific feature testing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-orange-900">Mocking APIs</h3>
                  <p className="text-gray-700 mb-2">Simulated server responses for reliable testing</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800">✓ Mock Supabase authentication responses</p>
                    <p className="text-orange-800">✓ Simulate network conditions and errors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Advantages
    {
      title: "Advantages and Benefits",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">💰</span>
                <h3 className="font-bold text-lg text-green-800">Cost-Effective</h3>
              </div>
              <p className="text-sm text-gray-700">Free and officially supported by Flutter team with no licensing costs</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="font-bold text-lg text-blue-800">Extremely Fast</h3>
              </div>
              <p className="text-sm text-gray-700">Tests execute in milliseconds with automated test runners</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">📱</span>
                <h3 className="font-bold text-lg text-purple-800">Mobile-Native</h3>
              </div>
              <p className="text-sm text-gray-700">Built specifically for Flutter mobile UI testing with deep integration</p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🔄</span>
                <h3 className="font-bold text-lg text-orange-800">CI/CD Ready</h3>
              </div>
              <p className="text-sm text-gray-700">Seamless integration with automation pipelines like GitHub Actions</p>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="font-bold text-lg text-pink-800">Reliable Results</h3>
              </div>
              <p className="text-sm text-gray-700">Deterministic and consistent test outcomes with no flaky tests</p>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 shadow-md">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🔧</span>
                <h3 className="font-bold text-lg text-indigo-800">Easy Integration</h3>
              </div>
              <p className="text-sm text-gray-700">No external dependencies or complex setup required</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-xl">
            <h3 className="font-bold text-xl mb-4 text-center">Real-World Impact in SwiftRide</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Caught UI bugs before production deployment</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Validated all form validation logic automatically</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Ensured consistent UI behavior across features</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Enabled confident refactoring with safety net</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: Limitations & Challenges
    {
      title: "Limitations and Challenges",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-5 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🎓</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-red-800">Learning Curve</h3>
                <p className="text-sm text-gray-700 mb-2">Requires Flutter-specific knowledge and Dart programming skills</p>
                <div className="bg-red-100 p-3 rounded text-xs italic text-red-900">
                  <strong>Solution:</strong> Comprehensive documentation available and active community support on Stack Overflow and GitHub
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🧩</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-orange-800">Widget Test Complexity</h3>
                <p className="text-sm text-gray-700 mb-2">Complex widgets with multiple states can require intricate test setups</p>
                <div className="bg-orange-100 p-3 rounded text-xs italic text-orange-900">
                  <strong>Solution:</strong> Use test utilities, helper functions, and reusable test components for maintainability
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex items-start">
              <span className="text-3xl mr-4">📱</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-yellow-800">Device Requirements</h3>
                <p className="text-sm text-gray-700 mb-2">Integration tests need real devices or emulators to run</p>
                <div className="bg-yellow-100 p-3 rounded text-xs italic text-yellow-900">
                  <strong>Solution:</strong> CI/CD pipelines with emulator automation or cloud testing services like Firebase Test Lab
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🎨</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-purple-800">Golden Test Sensitivity</h3>
                <p className="text-sm text-gray-700 mb-2">Golden tests break with minor UI pixel changes or font differences</p>
                <div className="bg-purple-100 p-3 rounded text-xs italic text-purple-900">
                  <strong>Solution:</strong> Use selective golden testing only for critical UI components and maintain separate golden files
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
            <p className="text-center text-sm font-semibold text-blue-800">
              💡 Despite these limitations, Flutter Test remains the best choice for Flutter application testing
            </p>
          </div>
        </div>
      )
    },

    // Slide 13: Comparison with Other Tools
    {
      title: "Comparison: Flutter Test vs Other Tools",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-center">Competitive Analysis</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl text-gray-800">Flutter Test vs Selenium</h3>
              <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-1 rounded-full">Winner: Flutter Test</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-3 text-lg">✓ Flutter Test</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mobile-native testing for iOS and Android</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Millisecond execution speed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Built-in framework, no setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deep widget-level control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-600 mb-3 text-lg">✗ Selenium</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Primarily for web browser automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Slower execution time (seconds)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>External dependency, complex setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Limited mobile app testing support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-xl text-gray-800">Flutter Test vs Appium</h3>
              <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-1 rounded-full">Winner: Flutter Test</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-800 mb-3 text-lg">✓ Flutter Test</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deeply integrated with Flutter SDK</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10x faster test execution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zero setup complexity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Widget-level precision control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-600 mb-3 text-lg">✗ Appium</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>External framework requiring setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Significantly slower test runs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Complex configuration and dependencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">−</span>
                    <span>Surface-level element interaction only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg shadow-lg">
            <p className="text-center font-bold text-lg">
              🏆 Flutter Test: Purpose-built for Flutter with unmatched speed and integration
            </p>
          </div>
        </div>
      )
    },

    // Slide 14: Conclusion & Thank You
    {
      title: "Conclusion",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-4xl font-bold mb-4">Project Success</h2>
            <p className="text-xl">Flutter Test Implementation in SwiftRide</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500 text-center">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-3" />
              <p className="text-4xl font-bold text-green-600 mb-2">33/33</p>
              <p className="text-gray-700 font-semibold">Tests Passing</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500 text-center">
              <Zap className="w-16 h-16 text-blue-600 mx-auto mb-3" />
              <p className="text-4xl font-bold text-blue-600 mb-2">10.6s</p>
              <p className="text-gray-700 font-semibold">Total Runtime</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-500 text-center">
              <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-3" />
              <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-gray-700 font-semibold">Success Rate</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive test coverage for UI components</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Automated validation of form logic and error handling</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Production-ready test suite with zero failures</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">CI/CD integration ready for automated testing</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl mb-6">Questions & Answers</p>
            <div className="space-y-2">
              <p className="text-lg">Maria Ashraf (01-134221-037)</p>
              <p className="text-lg">Hammad Shahid (01-134221-026)</p>
            </div>
            <p className="text-sm mt-6 text-gray-400">SOFTWARE QUALITY ASSURANCE – ASSIGNMENT 4</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h2>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Slide {currentSlide + 1} of {slides.length}
              </p>
            </div>
            
            <div className="min-h-[500px]">
              {slides[currentSlide].content}
            </div>
          </div>
          
          <div className="bg-gray-50 px-8 py-4 flex justify-between items-center border-t">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterTestPresentation;