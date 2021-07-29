var p5Inst = new p5(null, 'sketch');

window.preload = function() {
    initMobileControls(p5Inst);

    p5Inst._predefinedSpriteAnimations = {};
    p5Inst._pauseSpriteAnimationsByDefault = false;
    var animationListJSON = { "orderedKeys": ["64c9ec51-f589-43b9-8646-355130aecb33", "e5060320-c513-40d7-bb03-83007de53f2a", "656c2d8d-2697-4d11-938b-dd6b8f56ff12", "9ea8ee7f-b2ee-47c1-b0cc-8b60112a112d", "d8b70305-fad2-4f4c-b811-159324ecc13d", "5d939b21-edff-4e38-b2b6-a27b6577a996"], "propsByKey": { "64c9ec51-f589-43b9-8646-355130aecb33": { "name": "cati", "sourceUrl": "assets/api/v1/animation-library/gamelab/Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL/category_animals/cat.png", "frameSize": { "x": 332, "y": 398 }, "frameCount": 1, "looping": true, "frameDelay": 2, "version": "Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL", "categories": ["animals"], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 332, "y": 398 }, "rootRelativePath": "assets/api/v1/animation-library/gamelab/Y47mQRheJxMYu1Rgwn40SeQmfLMsXyJL/category_animals/cat.png" }, "e5060320-c513-40d7-bb03-83007de53f2a": { "name": "b", "sourceUrl": "assets/api/v1/animation-library/gamelab/H4nSKI40zcOgf9vkmL_oBWN7mcheqVpU/category_animals/ladybug.png", "frameSize": { "x": 396, "y": 366 }, "frameCount": 1, "looping": true, "frameDelay": 2, "version": "H4nSKI40zcOgf9vkmL_oBWN7mcheqVpU", "categories": ["animals"], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 396, "y": 366 }, "rootRelativePath": "assets/api/v1/animation-library/gamelab/H4nSKI40zcOgf9vkmL_oBWN7mcheqVpU/category_animals/ladybug.png" }, "656c2d8d-2697-4d11-938b-dd6b8f56ff12": { "name": "flyi", "sourceUrl": "assets/api/v1/animation-library/gamelab/MN._ebIYGmNQMTED9ssZ2vZU03kNOUvp/category_icons/butterfly.png", "frameSize": { "x": 398, "y": 350 }, "frameCount": 1, "looping": true, "frameDelay": 2, "version": "MN._ebIYGmNQMTED9ssZ2vZU03kNOUvp", "categories": ["icons"], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 398, "y": 350 }, "rootRelativePath": "assets/api/v1/animation-library/gamelab/MN._ebIYGmNQMTED9ssZ2vZU03kNOUvp/category_icons/butterfly.png" }, "9ea8ee7f-b2ee-47c1-b0cc-8b60112a112d": { "name": "cat", "sourceUrl": null, "frameSize": { "x": 194, "y": 260 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "ZE1Nnik0.zwBTsNAHJnMDw7_mi2fdUj9", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 194, "y": 260 }, "rootRelativePath": "assets/9ea8ee7f-b2ee-47c1-b0cc-8b60112a112d.png" }, "d8b70305-fad2-4f4c-b811-159324ecc13d": { "name": "ladyBug", "sourceUrl": null, "frameSize": { "x": 155, "y": 325 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "YWbmFga3RKYsfd1rNIm9ZvbNkw3lky7H", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 155, "y": 325 }, "rootRelativePath": "assets/d8b70305-fad2-4f4c-b811-159324ecc13d.png" }, "5d939b21-edff-4e38-b2b6-a27b6577a996": { "name": "fly", "sourceUrl": null, "frameSize": { "x": 577, "y": 432 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "vCbQb64YwDaTL6UQIBJcBH_hTQCsC6gL", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 577, "y": 432 }, "rootRelativePath": "assets/5d939b21-edff-4e38-b2b6-a27b6577a996.png" } } };
    var orderedKeys = animationListJSON.orderedKeys;
    var allAnimationsSingleFrame = false;
    orderedKeys.forEach(function(key) {
        var props = animationListJSON.propsByKey[key];
        var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
        var image = loadImage(props.rootRelativePath, function() {
            var spriteSheet = loadSpriteSheet(
                image,
                props.frameSize.x,
                props.frameSize.y,
                frameCount
            );
            p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
            p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
            p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
        });
    });

    function wrappedExportedCode(stage) {
        if (stage === 'preload') {
            if (setup !== window.setup) {
                window.setup = setup;
            } else {
                return;
            }
        }
        // -----


        // create charecters 
        var cat = createSprite(25, 200, 50, 50);
        cat.shapeColor = "black";
        var ladyBug = createSprite(375, 200, 40, 40);
        ladyBug.shapeColor = "red";
        var butterFly = createSprite(98, 248, 10, 10);
        var butterFly1 = createSprite(277, 246, 10, 10);
        var butterFly2 = createSprite(189, 249, 10, 10);

        // create boundries
        var wall1 = createSprite(195, 65, 500, 10);
        var wall2 = createSprite(195, 335, 500, 10);

        var life = 3;

        //text
        textSize(30);

        function draw() {
            background("lightblue");
            text("lives: " + life, 110, 31);

            //animate 
            cat.setAnimation("cat");
            cat.scale = 0.3;

            ladyBug.setAnimation("ladyBug");
            ladyBug.scale = 0.25;

            butterFly.setAnimation("fly");
            butterFly.scale = 0.05;

            butterFly1.setAnimation("fly");
            butterFly1.scale = 0.05;

            butterFly2.setAnimation("fly");
            butterFly2.scale = 0.05;



            //bounce
            createEdgeSprites();
            ladyBug.bounceOff(edges);
            ladyBug.bounceOff(wall1);
            ladyBug.bounceOff(wall2);
            cat.bounceOff(edges);
            cat.bounceOff(wall1);
            cat.bounceOff(wall2);

            butterFly.bounceOff(edges);
            butterFly.bounceOff(wall1);
            butterFly.bounceOff(wall2);
            butterFly.bounceOff(butterFly1);
            butterFly.bounceOff(butterFly2);
            butterFly.bounceOff(ladyBug);

            butterFly1.bounceOff(edges);
            butterFly1.bounceOff(wall1);
            butterFly1.bounceOff(wall2);
            butterFly1.bounceOff(butterFly);
            butterFly1.bounceOff(butterFly2);
            butterFly1.bounceOff(ladyBug);

            butterFly2.bounceOff(edges);
            butterFly2.bounceOff(wall1);
            butterFly2.bounceOff(wall2);
            butterFly2.bounceOff(butterFly);
            butterFly2.bounceOff(butterFly1);
            butterFly2.bounceOff(ladyBug);



            //cat movement
            if (keyDown("RIGHT_ARROW")) {
                cat.x = cat.x + 2;
            }
            if (keyDown("LEFT_ARROW")) {
                cat.x = cat.x - 2;
            }
            if (keyDown("UP_ARROW")) {
                cat.y = cat.y - 2;
            }
            if (keyDown("DOWN_ARROW")) {
                cat.y = cat.y + 2;
            }

            //butterfly movement
            if (keyDown("ENTER")) {
                butterFly.velocityY = 7;
                butterFly.velocityY = -7;
                butterFly1.velocityY = 8;
                butterFly1.velocityY = -8;
                butterFly2.velocityY = 7;
                butterFly2.velocityY = -7;
            }

            //lose lives
            if (
                cat.isTouching(butterFly) ||
                cat.isTouching(butterFly1) ||
                cat.isTouching(butterFly2)) {
                cat.x = 25;
                cat.y = 200;
                life = life - 1;
            }

            if (life == 0) {
                butterFly.velocityY = 0;
                butterFly.velocityY = 0;
                butterFly1.velocityY = 0;
                butterFly1.velocityY = 0;
                butterFly2.velocityY = 0;
                butterFly2.velocityY = 0;
                text("GAME_OVER!!!!", 200, 200);
            }


            drawSprites();

        }


        // -----
        try { window.draw = draw; } catch (e) {}
        switch (stage) {
            case 'preload':
                if (preload !== window.preload) { preload(); }
                break;
            case 'setup':
                if (setup !== window.setup) { setup(); }
                break;
        }
    }
    window.wrappedExportedCode = wrappedExportedCode;
    wrappedExportedCode('preload');
};

window.setup = function() {
    window.wrappedExportedCode('setup');
};